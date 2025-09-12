"use client";

import { useState, useEffect } from "react";

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-[70px] sm:top-[75px] md:top-[80px] lg:top-[85px] xl:top-[90px] 2xl:top-[100px] left-0 right-0 z-40 bg-white border-b border-gray-200">
      {/* ↓ decreased from h-1 to h-0.5 */}
      <div className="relative h-0.5 bg-gray-100">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#007BFF] to-[#0056b3] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollTimeline;
