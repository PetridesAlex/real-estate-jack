import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#1f2937] via-[#243244] to-[#1f5a4a] mt-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-10">
        <h3 className="text-white text-2xl font-bold">Real Estate Jack</h3>
        <p className="text-slate-300 mt-2 max-w-xl">
          Premium real estate and property management services with transparent communication.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/" className="text-slate-200">Home</Link>
          <Link href="/properties" className="text-slate-200">Properties</Link>
          <Link href="/services" className="text-slate-200">Services</Link>
          <Link href="/about" className="text-slate-200">About</Link>
          <Link href="/contact" className="text-slate-200">Contact</Link>
        </div>

        <div className="mt-8">
          <p className="text-slate-300">+1 555 100 2000</p>
          <p className="text-slate-300">contact@estatejack.com</p>
          <p className="text-slate-400 mt-4">© 2026 EstateJack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
