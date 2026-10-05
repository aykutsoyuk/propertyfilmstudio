"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CinematicPlaceholder } from "./CinematicPlaceholder";

export function ServiceCard({
  number,
  title,
  body,
  video,
  poster,
  large = false,
}: {
  number: string;
  title: string;
  body: string;
  video: string;
  poster: string;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden bg-black text-white ${
        large ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/5]"
      }`}
    >
      <CinematicPlaceholder />
      {!failed && (
        <video
          className="absolute inset-0 h-full w-full object-cover grayscale scale-100 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10 transition-colors duration-700 group-hover:from-black/85" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
        <span className="font-display text-sm tracking-wide text-white/70">
          {number}
        </span>

        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <h3
            className={`font-display tracking-tight ${
              large ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
            {body}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] text-white/80">
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
