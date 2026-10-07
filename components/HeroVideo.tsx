"use client";

import { useState } from "react";
import { CinematicPlaceholder } from "./CinematicPlaceholder";

export function HeroVideo() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0">
      <CinematicPlaceholder />
      {!failed && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/bom-jesus-poster.jpg"
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source src="/videos/bom-jesus-hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
    </div>
  );
}
