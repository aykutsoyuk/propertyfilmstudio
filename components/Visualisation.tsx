import { useTranslations } from "next-intl";
import { stillToMotion, type StillToMotion } from "@/content/visualisation";
import { Reveal } from "./Reveal";
import { StillAndLoop } from "./StillAndLoop";

export function Visualisation() {
  const t = useTranslations("visualisation");
  const side = stillToMotion.filter((item) => item.layout === "side");
  const stacked = stillToMotion.filter((item) => item.layout === "stacked");

  const example = (item: StillToMotion, index: number) => (
    <Reveal key={item.id} delay={index * 60}>
      <StillAndLoop
        image={item.image}
        video={item.video}
        imageLabel={t("imageLabel")}
        videoLabel={t("videoLabel")}
        badge={t("badge")}
        stacked={item.layout === "stacked"}
        sizes="(min-width: 1024px) 25vw, 50vw"
      />
      <div className="mt-5">
        <h3
          className={`font-display ${
            item.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {t(`items.${item.id}.title`)}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
          {t(`items.${item.id}.description`)}
        </p>
      </div>
    </Reveal>
  );

  return (
    <section id="visualisation" className="bg-black pb-24 text-white lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            {t("eyebrow")}
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {t("heading")}
            </h2>
            {/* <p className="max-w-md text-sm leading-relaxed text-white/65 lg:text-base">
              {t("body")}
            </p> */}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-14 lg:mt-20 lg:grid-cols-2">
          {side.map(example)}
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-14 lg:grid-cols-2">
          {stacked.map(example)}
        </div>

        {/* <p className="mt-14 max-w-xl text-xs leading-relaxed text-white/40">
          {t("note")}
        </p> */}
      </div>
    </section>
  );
}
