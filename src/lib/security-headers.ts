/**
 * Site hardening headers.
 *
 * Goal: stop third-party scripts / ad injection / iframe hijacking from
 * running on the site, even if something is injected into the page markup.
 */

const SELF = "'self'";

// Hosts the site legitimately needs.
const SCRIPT_HOSTS = ["https://*.lovable.app", "https://*.lovable.dev", "https://*.gpteng.co"];
const CONNECT_HOSTS = [
  "https://*.supabase.co",
  "https://*.lovable.app",
  "https://*.lovable.dev",
  "wss://*.supabase.co",
  "ws:",
  "wss:",
];
const IMG_HOSTS = ["data:", "blob:", "https:"];
const FRAME_HOSTS = ["https://www.google.com", "https://maps.google.com"];

const CSP = [
  `default-src ${SELF}`,
  // 'unsafe-inline' is required by the framework's hydration scripts; the host
  // allowlist is what blocks injected ad/tracker scripts from other domains.
  `script-src ${SELF} 'unsafe-inline' 'unsafe-eval' ${SCRIPT_HOSTS.join(" ")}`,
  `style-src ${SELF} 'unsafe-inline' https://fonts.googleapis.com`,
  `font-src ${SELF} data: https://fonts.gstatic.com`,
  `img-src ${SELF} ${IMG_HOSTS.join(" ")}`,
  `media-src ${SELF} https: blob:`,
  `connect-src ${SELF} ${CONNECT_HOSTS.join(" ")}`,
  `frame-src ${SELF} ${FRAME_HOSTS.join(" ")}`,
  // Nobody may embed this site inside their own page (clickjacking / ad frames).
  `frame-ancestors ${SELF}`,
  `form-action ${SELF}`,
  `base-uri ${SELF}`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const HEADERS: Record<string, string> = {
  "Content-Security-Policy": CSP,
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Cross-Origin-Opener-Policy": "same-origin",
  "X-Permitted-Cross-Domain-Policies": "none",
};

export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
