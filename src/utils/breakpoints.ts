"use client";

import { useEffect, useState } from "react";

export const useBreakpoints = () => {
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    columns: width < 768 ? 1 : width < 1024 ? 2 : 3
  };
};
