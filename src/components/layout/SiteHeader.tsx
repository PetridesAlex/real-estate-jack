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

        <button className="md:hidden p-2 text-brand ml-auto" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
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
