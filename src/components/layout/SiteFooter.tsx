import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#1b2733] via-[#223445] to-[#234c41] mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="inline-flex items-center rounded-2xl bg-white/10 border border-white/15 px-3 py-2 shadow-sm">
              <Image
                src="/images/logo/property-needs-logo.webp"
                alt="Kaja Management LTD logo"
                width={190}
                height={54}
                className="h-10 md:h-11 w-auto object-contain"
              />
            </div>
            <h3 className="text-white text-2xl font-bold mt-4">Kaja Management LTD</h3>
            <p className="text-slate-300 mt-3 leading-7 max-w-md">
              Premium real estate and property management services focused on trust, consistency and long-term value.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] text-slate-400 font-semibold">QUICK LINKS</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/" className="text-slate-100 hover:text-white transition">Home</Link>
              <Link href="/properties" className="text-slate-100 hover:text-white transition">Properties</Link>
              <Link href="/services" className="text-slate-100 hover:text-white transition">Services</Link>
              <Link href="/about" className="text-slate-100 hover:text-white transition">About</Link>
              <Link href="/contact" className="text-slate-100 hover:text-white transition">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] text-slate-400 font-semibold">CONTACT</p>
            <div className="mt-4 space-y-2">
              <p className="text-slate-100">+357 97 790825</p>
              <p className="text-slate-200">contact@kajamanagementltd.com</p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://wa.me/35797790825"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center rounded-lg bg-[#25D366] text-white p-2"
              >
                <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                  <path d="M19.11 17.2c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.16-.29-.02-.45.12-.6.13-.13.29-.33.44-.49.15-.16.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.09-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.35s1 2.74 1.14 2.93c.15.19 1.96 2.99 4.75 4.19.66.28 1.17.44 1.57.56.66.21 1.26.18 1.73.11.53-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
                  <path d="M16 .53C7.45.53.53 7.45.53 16c0 2.82.76 5.57 2.2 7.98L.5 31.47l7.71-2.16A15.4 15.4 0 0 0 16 31.47c8.55 0 15.47-6.92 15.47-15.47S24.55.53 16 .53Zm0 28.11c-2.35 0-4.66-.63-6.68-1.83l-.48-.28-4.58 1.28 1.22-4.46-.31-.51a12.57 12.57 0 0 1-1.93-6.84c0-6.96 5.67-12.63 12.63-12.63S28.5 9.04 28.5 16 22.96 28.64 16 28.64Z" />
                </svg>
              </a>
              <a
                href="tg://resolve?phone=35797790825"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="inline-flex items-center justify-center rounded-lg bg-[#229ED9] text-white p-2"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M9.78 15.17l-.4 5.61c.58 0 .84-.25 1.15-.55l2.75-2.63 5.7 4.18c1.04.58 1.78.28 2.06-.96l3.73-17.47h.01c.33-1.54-.56-2.14-1.58-1.76L1.43 9.42c-1.48.58-1.46 1.4-.25 1.77l5.57 1.74L19.68 5.1c.61-.4 1.17-.18.71.22" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10">
          <p className="text-slate-400 text-sm">© 2026 Kaja Management LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
