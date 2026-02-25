"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const minVisibleTimer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => setIsVisible(false), 420);
    }, 1400);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(minVisibleTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isVisible) document.body.style.overflow = "";
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center preloader-shell transition-opacity duration-500 ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Loading website"
      role="status"
    >
      <div className="absolute inset-0 preloader-grid-overlay" />

      <div className="relative flex flex-col items-center px-6">
        <div className="preloader-core-glow absolute -inset-16 rounded-full" />
        <div className="preloader-ring preloader-ring-1 absolute h-28 w-28 rounded-full border border-white/20" />
        <div className="preloader-ring preloader-ring-2 absolute h-40 w-40 rounded-full border border-white/10" />

        <div className="relative z-10 mt-1 preloader-logo-wrap">
          <Image
            src="/images/logo/property-needs-logo.webp"
            alt="Kaja Management LTD logo"
            width={340}
            height={92}
            priority
            className="h-16 md:h-20 w-auto object-contain preloader-logo"
          />
        </div>

        <div className="relative z-10 mt-5 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent preloader-dot-1" />
          <div className="h-2 w-2 rounded-full bg-white/80 preloader-dot-2" />
          <div className="h-2 w-2 rounded-full bg-secondary preloader-dot-3" />
        </div>

        <p className="preloader-wordmark text-white text-3xl md:text-5xl font-bold tracking-[0.16em] mt-7 text-center">
          KAJA MANAGEMENT LTD
        </p>
        <p className="preloader-subtext text-white/70 text-xs tracking-[0.22em] mt-2 text-center">
          PREMIUM PROPERTY MANAGEMENT
        </p>

        <div className="mt-7 w-52 h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div className="preloader-progress h-full w-1/2 bg-gradient-to-r from-accent via-white to-secondary" />
        </div>
      </div>
    </div>
  );
}
