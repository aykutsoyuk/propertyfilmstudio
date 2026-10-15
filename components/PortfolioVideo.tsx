"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { CinematicPlaceholder } from "./CinematicPlaceholder";

export function PortfolioVideo({
  src,
  poster,
  videoType,
  label,
}: {
  src: string;
  poster: string;
  videoType: "horizontal" | "vertical";
  label: string;
}) {
  // The <video> element is only mounted after the visitor clicks, so the
  // page loads just the (optimised, lazy) poster until then.
  const [active, setActive] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const sizes =
    videoType === "vertical"
      ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      : "(min-width: 1400px) 1400px, 100vw";

  return (
    <div
      className={`relative overflow-hidden bg-black ${
        videoType === "vertical" ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <CinematicPlaceholder />
      {poster && !posterFailed && (
        <Image
          src={poster}
          alt=""
          fill
          sizes={sizes}
          loading="lazy"
          className="object-cover"
          onError={() => setPosterFailed(true)}
        />
      )}
      {active && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          controls
          playsInline
          preload="none"
          onError={() => setActive(false)}
          aria-label={label}
        />
      )}
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={label}
          className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/10"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/30 backdrop-blur-sm transition-transform group-hover:scale-105">
            <Play size={22} className="text-white" fill="white" />
          </span>
        </button>
      )}
    </div>
  );
}
