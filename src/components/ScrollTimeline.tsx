"use client";

import { useState, useEffect, useRef } from "react";

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navOffset, setNavOffset] = useState<number>(70);
  const roRef = useRef<ResizeObserver | null>(null);

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

  useEffect(() => {
    const measureNav = () => {
      const nav = document.getElementById("site-navbar");
      if (nav) {
        const h = nav.offsetHeight;
        if (h && h !== navOffset) setNavOffset(h);
      }
    };

    // Measure immediately and after next paint to avoid font/layout shifts
    measureNav();
    const t = setTimeout(measureNav, 50);

    // Observe navbar size changes (e.g., responsive breakpoints)
    const nav = document.getElementById("site-navbar");
    if (nav && "ResizeObserver" in window) {
      const ro = new ResizeObserver(measureNav);
      ro.observe(nav);
      roRef.current = ro;
    }

    window.addEventListener("resize", measureNav);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measureNav);
      if (roRef.current && nav) {
        try { roRef.current.unobserve(nav); } catch {}
        roRef.current.disconnect();
        roRef.current = null;
      }
    };
  }, [navOffset]);

  return (
    <div
      className="fixed left-0 right-0 z-40 bg-white border-b border-gray-200"
      style={{ top: navOffset }}
    >
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
