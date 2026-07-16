import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const RECIPIENT = "fmnhome2015@gmail.com";
const GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function toBase64Url(str: string) {
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default defineTool({
  name: "submit_request_info",
  title: "Submit a Request Info inquiry",
  description:
    "Send a Request Info inquiry to the FMANAR team. Equivalent to submitting the public Request Info form on the site.",
  inputSchema: {
    name: z.string().trim().min(1).max(100).describe("First name"),
    lastName: z.string().trim().min(1).max(100).describe("Last name"),
    email: z.string().trim().email().max(255),
    telephone: z.string().trim().min(1).max(50),
    postalCode: z.string().trim().min(1).max(20),
    country: z.string().trim().min(1).max(100),
    topic: z.string().trim().min(1).max(100).describe("Subject / topic of the inquiry"),
    message: z.string().trim().min(1).max(2000),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
  handler: async (data) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
    if (!lovableKey || !gmailKey) {
      return {
        content: [{ type: "text", text: "Email service not configured on the server." }],
        isError: true,
      };
    }

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

    const raw = toBase64Url(mime);
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
      const errText = await res.text();
      return {
        content: [
          { type: "text", text: `Failed to send email (${res.status}): ${errText.slice(0, 500)}` },
        ],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: "Your Request Info has been sent to the FMANAR team." }],
      structuredContent: { ok: true, sentTo: RECIPIENT },
    };
  },
});
