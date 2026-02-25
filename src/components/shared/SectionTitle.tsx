type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <p className="text-accent text-xs tracking-[2px] font-semibold">{eyebrow.toUpperCase()}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">{title}</h2>
      {subtitle ? <p className="text-slate-600 mt-2 max-w-3xl">{subtitle}</p> : null}
    </div>
  );
}
