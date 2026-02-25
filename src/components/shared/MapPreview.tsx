export default function MapPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
      <iframe
        title="Kaja Management LTD office map"
        src="https://www.google.com/maps?q=40.7580,-73.9855&z=13&output=embed"
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
