"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CinematicPlaceholder } from "./CinematicPlaceholder";

export function StillAndLoop({
  image,
  video,
  imageLabel,
  videoLabel,
  badge,
  stacked = false,
  sizes,
}: {
  image: string;
  video: string;
  imageLabel: string;
  videoLabel: string;
  badge: string;
  stacked?: boolean;
  sizes: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();
  const [playing, setPlaying] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc((current) => current ?? video);
          node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [video]);

  const className = stacked ? "aspect-video" : "aspect-[9/16]";
  const tag =
    "pointer-events-none absolute left-3 top-3 bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm";

  return (
    <div className={`grid gap-1.5 sm:gap-2 ${stacked ? "grid-cols-1" : "grid-cols-2"}`}>
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <CinematicPlaceholder />
        {!imageFailed && (
          <Image
            src={image}
            alt=""
            fill
            sizes={sizes}
            loading="lazy"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className={tag}>{imageLabel}</span>
      </div>

      <div className={`relative overflow-hidden bg-black ${className}`}>
        <CinematicPlaceholder />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setPlaying(true)}
          onError={() => setPlaying(false)}
          aria-label={videoLabel}
        />
        <span className={tag}>{videoLabel}</span>
        <span className="pointer-events-none absolute bottom-3 right-3 bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {badge}
        </span>
      </div>
    </div>
  );
}
