"use client";

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#151a22] transition-opacity duration-500 ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Loading website"
      role="status"
    >
      <div className="relative flex flex-col items-center">
        <div className="preloader-pulse absolute -inset-6 rounded-full bg-accent/20" />
        <p className="preloader-wordmark text-white text-3xl md:text-4xl font-bold tracking-[0.2em]">REAL ESTATE JACK</p>
        <div className="mt-6 w-44 h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div className="preloader-progress h-full w-1/2 bg-gradient-to-r from-accent to-secondary" />
        </div>
      </div>
    </div>
  );
}
