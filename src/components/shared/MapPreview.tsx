export default function MapPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-square w-full max-w-[460px] mx-auto">
      <iframe
        title="Kaja Management LTD office map"
        src="https://www.google.com/maps?q=40.7580,-73.9855&z=13&output=embed"
        width="100%"
        height="100%"
        className="h-full w-full"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
