"use client";

import { useEffect, useState } from "react";
import { Dithering } from "@paper-design/shaders-react";

/**
 * Full-screen 1-bit Bayer-dithered background — black ink on near-black,
 * slowly warping. Grays are an illusion of dither density, like a 90s
 * Macintosh screen. Freezes when the user prefers reduced motion.
 */
export default function ShaderBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="shader-bg" aria-hidden>
      <Dithering
        style={{ width: "100%", height: "100%" }}
        colorBack="#0a0a0a"
        colorFront="#787878"
        shape="warp"
        type="8x8"
        size={3.5}
        scale={0.55}
        speed={reducedMotion ? 0 : 0.25}
      />
      <div className="shader-scrim" />
    </div>
  );
}
