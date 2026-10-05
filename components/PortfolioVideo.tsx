"use client";

import { useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className={`relative overflow-hidden bg-black ${
        videoType === "vertical" ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <CinematicPlaceholder className={playing ? "opacity-0" : "opacity-100"} />
      {!failed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          playsInline
          controls={playing}
          preload="none"
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          aria-label={label}
        >
          <source src={src} type="video/mov" />
        </video>
      )}
      {!playing && (
        <button
          type="button"
          onClick={toggle}
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
