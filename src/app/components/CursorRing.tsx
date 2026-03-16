"use client";

import { useEffect, useState } from "react";

const CURSOR_LABEL_SELECTOR = "[data-cursor-label]";

export default function CursorRing() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest(CURSOR_LABEL_SELECTOR);
      const value = target?.getAttribute("data-cursor-label");
      setLabel(value ?? null);
    };

    const handleLeave = () => setLabel(null);

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      document.body.style.cursor = prevCursor;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden
    >
      {/* Dot underneath so badge can sit on top */}
      <div
        className="absolute left-0 top-0 z-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366] transition-opacity duration-150 ease-out"
        style={{ opacity: label ? 0 : 1 }}
      />
      {/* Badge on top when hovered — 8px above cursor */}
      <div
        className="absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366] px-3 py-1.5 text-sm font-medium text-white whitespace-nowrap shadow-md transition-opacity duration-150 ease-out"
        style={{ opacity: label ? 1 : 0, marginTop: -16 }}
      >
        {label || "\u00A0"}
      </div>
    </div>
  );
}
