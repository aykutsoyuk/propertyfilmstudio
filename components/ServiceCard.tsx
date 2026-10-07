import Image from "next/image";
import { CinematicPlaceholder } from "./CinematicPlaceholder";

export function ServiceCard({
  title,
  poster,
  large = false,
}: {
  title: string;
  poster: string;
  large?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-black text-white ${
        large ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/5]"
      }`}
    >
      <CinematicPlaceholder />
      <Image
        src={poster}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10 transition-colors duration-700 group-hover:from-black/85" />

      <div className="relative z-10 flex h-full items-end p-6 lg:p-8">
        <h3
          className={`font-display transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
            large ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
      </div>
    </article>
  );
}
