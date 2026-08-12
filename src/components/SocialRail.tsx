import { Facebook, Mail } from "lucide-react";
import qr from "@/assets/Whatsapp.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.86-2.48v-3.2a5.8 5.8 0 1 0 4.95 5.73V9.4a7.35 7.35 0 0 0 4.29 1.37V7.68a4.28 4.28 0 0 1-3.23-1.86z" />
    </svg>
  );
}

const itemClass =
  "group relative flex h-11 w-11 items-center justify-center border border-border/50 bg-background/80 backdrop-blur-sm text-foreground/80 transition-colors hover:border-[--gold] hover:text-[--gold]";
const popClass =
  "pointer-events-none absolute right-[calc(100%+10px)] top-1/2 w-max max-w-none -translate-y-1/2 origin-right scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100";

export function SocialRail() {
  return (
    <div className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
      <a
        href="https://www.facebook.com/share/1c62eA5fod/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook — FmanarHome"
        className={itemClass}
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://www.tiktok.com/@FmanarHome"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok — FmanarHome"
        className={itemClass}
      >
        <TikTokIcon className="h-5 w-5" />
      </a>
      <div className={itemClass} role="img" aria-label="WhatsApp QR code">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.45 1.34 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01A9.9 9.9 0 0 0 22 11.93 9.9 9.9 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 1 1 6.99 3.88zm4.5-6.14c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.13-.16.24-.64.79-.78.95-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.83-.86 2.03s.88 2.35 1 2.51c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
        </svg>
        <div className={popClass}>
          <div className="rounded-md border border-border/50 bg-background p-2 shadow-xl">
            {/* 注意这里：删掉了 .url */}
            <img src={qr} alt="WhatsApp QR code" className="h-40 w-40 object-contain" />
          </div>
        </div>
      </div>
      <a
        href="mailto:fmnhome2015@gmail.com"
        aria-label="Email fmnhome2015@gmail.com"
        className={itemClass}
      >
        <Mail className="h-5 w-5" />
        <div className={popClass}>
          <span className="block whitespace-nowrap rounded-md border border-border/50 bg-background px-3 py-2 text-xs tracking-wide shadow-xl">
            fmnhome2015@gmail.com
          </span>
        </div>
      </a>
    </div>
  );
}
