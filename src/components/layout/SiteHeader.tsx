"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#d4ddd8] bg-gradient-to-r from-[#f4f7f6]/95 via-[#eef4f1]/95 to-[#e8f1ec]/95 backdrop-blur shadow-md">
      <div className="w-full px-4 md:px-8 py-3 flex items-center">
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <Image
            src="/images/logo/property-needs-logo.webp"
            alt="Property Needs Logo"
            width={300}
            height={76}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition px-3 py-2 rounded-lg ${
                  active ? "bg-secondary text-white font-semibold" : "text-slate-700 hover:text-brand hover:bg-slate-200/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/35797790825"
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp chat"
          className="md:hidden ml-auto mr-2 inline-flex items-center justify-center rounded-lg bg-[#25D366] text-white p-2 shadow-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
            <path d="M19.11 17.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.16-.29-.02-.45.12-.6.13-.13.29-.33.44-.49.15-.16.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.09-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.35s1 2.74 1.14 2.93c.15.19 1.96 2.99 4.75 4.19.66.28 1.17.44 1.57.56.66.21 1.26.18 1.73.11.53-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
            <path d="M16 .53C7.45.53.53 7.45.53 16c0 2.82.76 5.57 2.2 7.98L.5 31.47l7.71-2.16A15.4 15.4 0 0 0 16 31.47c8.55 0 15.47-6.92 15.47-15.47S24.55.53 16 .53Zm0 28.11c-2.35 0-4.66-.63-6.68-1.83l-.48-.28-4.58 1.28 1.22-4.46-.31-.51a12.57 12.57 0 0 1-1.93-6.84c0-6.96 5.67-12.63 12.63-12.63S28.5 9.04 28.5 16 22.96 28.64 16 28.64Z" />
          </svg>
        </a>

        <a
          href="tg://resolve?phone=35797790825"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Telegram"
          className="md:hidden mr-2 inline-flex items-center justify-center rounded-lg bg-[#229ED9] text-white p-2 shadow-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M9.78 15.17l-.4 5.61c.58 0 .84-.25 1.15-.55l2.75-2.63 5.7 4.18c1.04.58 1.78.28 2.06-.96l3.73-17.47h.01c.33-1.54-.56-2.14-1.58-1.76L1.43 9.42c-1.48.58-1.46 1.4-.25 1.77l5.57 1.74L19.68 5.1c.61-.4 1.17-.18.71.22" />
          </svg>
        </a>

        <button className="md:hidden p-2 text-brand" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-[#d4ddd8] bg-[#eef4f1] shadow-inner">
          <div className="w-full px-4 py-5 grid gap-2">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-white/75 text-slate-800 hover:bg-white hover:text-brand"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
