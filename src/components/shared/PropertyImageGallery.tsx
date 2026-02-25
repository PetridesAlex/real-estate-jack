"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PropertyImageGalleryProps = {
  images: string[];
  title: string;
};

export default function PropertyImageGallery({ images, title }: PropertyImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid grid-flow-col auto-cols-[320px] gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            aria-label={`Open image ${index + 1} for ${title}`}
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              width={320}
              height={220}
              className="w-[320px] h-[220px] object-cover transition duration-300 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[10000] bg-black/85 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-2 top-2 z-20 rounded-lg bg-black/60 text-white px-3 py-2 text-sm"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-lg bg-black/60 text-white px-3 py-2 text-sm"
              aria-label="Previous image"
            >
              Prev
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-lg bg-black/60 text-white px-3 py-2 text-sm"
              aria-label="Next image"
            >
              Next
            </button>

            <Image
              src={images[activeIndex]}
              alt={`${title} enlarged image ${activeIndex + 1}`}
              width={1600}
              height={980}
              className="w-full max-h-[82vh] rounded-2xl object-contain bg-black"
              priority
            />
            <p className="text-white/90 text-sm mt-3 text-center">
              Image {activeIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
