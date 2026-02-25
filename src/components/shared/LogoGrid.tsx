const logos = ["NOVA GROUP", "HARBOR INC", "SUMMIT RE", "URBAN CORE", "LUXE LIVING", "AXIOM"];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {logos.map((logo) => (
        <div key={logo} className="bg-white border border-slate-200 rounded-xl px-6 py-4">
          <p className="text-slate-500 text-center font-semibold">{logo}</p>
        </div>
      ))}
    </div>
  );
}
