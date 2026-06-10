"use client";

import { LiquidMetal } from "@paper-design/shaders-react";

/**
 * Liquid-chrome centerpiece: the shader's built-in "metaballs" shape rendered
 * as a morphing liquid-metal-glass blob. No source image needed — the shader
 * draws and animates the shape itself.
 */
export default function LiquidLogo({ className = "" }) {
  return (
    <LiquidMetal
      className={className}
      shape="metaballs"
      colorBack="#00000000"
      colorTint="#cdd2db"
      repetition={3}
      softness={0.42}
      shiftRed={0.34}
      shiftBlue={0.34}
      distortion={0.22}
      contour={0.4}
      angle={70}
      speed={0.55}
      scale={0.82}
      fit="contain"
    />
  );
}
