"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/**
 * Full-screen navy-blue / purple shader gradient that subtly drifts behind the
 * whole site. lazyLoad off + pointerEvents off so it always renders and never
 * intercepts clicks.
 */
export default function ShaderBackground() {
  return (
    <div className="shader-bg" aria-hidden>
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        lazyLoad={false}
        pointerEvents="none"
        pixelDensity={1}
        fov={42}
      >
        <ShaderGradient
          control="props"
          animate="on"
          type="waterPlane"
          uSpeed={0.16}
          uStrength={1.5}
          uDensity={1.4}
          uFrequency={5}
          uAmplitude={0}
          color1="#262a33"
          color2="#4c525f"
          color3="#15161b"
          grain="on"
          lightType="3d"
          brightness={1.05}
          cAzimuthAngle={180}
          cPolarAngle={115}
          cDistance={3.4}
          cameraZoom={1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
        />
      </ShaderGradientCanvas>
      <div className="shader-scrim" />
    </div>
  );
}
