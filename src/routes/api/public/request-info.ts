import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  telephone: z.string().trim().min(1).max(50),
  postalCode: z.string().trim().min(1).max(20),
  country: z.string().trim().min(1).max(100),
  topic: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(2000),
  // Honeypot: real users never see or fill this field.
  company: z.string().max(0).optional(),
});

// Blocks the classic "SEO / ad" spam submissions that only carry links.
const LINK_RE = /(https?:\/\/|www\.|\[url=|<a\s)/gi;
function looksLikeSpam(text: string) {
  const links = text.match(LINK_RE)?.length ?? 0;
  return links >= 2 || /\b(casino|viagra|crypto airdrop|seo services|buy backlinks)\b/i.test(text);
}

const RECIPIENT = "fmnhome2015@gmail.com";
const GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function toBase64Url(str: string) {
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRaw(data: z.infer<typeof schema>) {
  const subject = `New Request Info from ${data.name} ${data.lastName}`;
  const body = [
    `Name: ${data.name} ${data.lastName}`,
    `Email: ${data.email}`,
    `Telephone: ${data.telephone}`,
    `Postal Code: ${data.postalCode}`,
    `Country: ${data.country}`,
    `Topic: ${data.topic}`,
    ``,
    `Message:`,
    data.message,
  ].join("\r\n");

  const mime = [
    `To: ${RECIPIENT}`,
    `Reply-To: ${data.email}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject, "utf-8").toString("base64")}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset="UTF-8"`,
    ``,
    body,
  ].join("\r\n");

  return toBase64Url(mime);
}

export const Route = createFileRoute("/api/public/request-info")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          // Only accept submissions coming from this site (blocks bots that
          // POST to the endpoint directly from other domains).
          const origin = request.headers.get("origin");
          if (origin) {
            const host = request.headers.get("host");
            try {
              if (new URL(origin).host !== host) {
                return new Response(JSON.stringify({ error: "Forbidden" }), {
                  status: 403,
                  headers: { "Content-Type": "application/json" },
                });
              }
            } catch {
              return new Response(JSON.stringify({ error: "Forbidden" }), {
                status: 403,
                headers: { "Content-Type": "application/json" },
              });
            }
          }

          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "Invalid input", details: parsed.error.flatten() }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          if (parsed.data.company) {
            // Honeypot tripped — pretend success so bots do not retry.
            return new Response(JSON.stringify({ ok: true }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          if (looksLikeSpam(`${parsed.data.message} ${parsed.data.topic} ${parsed.data.name}`)) {
            return new Response(JSON.stringify({ ok: true }), {
              headers: { "Content-Type": "application/json" },
            });
          }

          const lovableKey = process.env.LOVABLE_API_KEY;
          const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
          if (!lovableKey || !gmailKey) {
            console.error("Missing gateway credentials");
            return new Response(JSON.stringify({ error: "Email service not configured" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          const raw = buildRaw(parsed.data);
          const res = await fetch(`${GATEWAY}/users/me/messages/send`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": gmailKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ raw }),
          });

          if (!res.ok) {
            const errBody = await res.text();
            console.error(`Gmail send failed [${res.status}]: ${errBody}`);
            return new Response(
              JSON.stringify({ error: "Failed to send email", status: res.status }),
              { status: 502, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          console.error("request-info error", e);
          return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
