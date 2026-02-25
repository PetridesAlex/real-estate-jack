type Props = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: Props) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card">
      <p className="text-slate-700 leading-6">"{quote}"</p>
      <p className="mt-4 font-semibold text-slate-900">{name}</p>
      <p className="text-slate-500 text-sm">{role}</p>
    </div>
  );
}
