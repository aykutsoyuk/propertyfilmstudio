import { useTranslations } from "next-intl";
import { selectedWorks } from "@/content/videos";
import { PortfolioVideo } from "./PortfolioVideo";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  const t = useTranslations("selectedWork");

  return (
    <section id="work" className="bg-black py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            {t("heading")}
          </h2>
        </Reveal>

        {/* Driven by content/videos.ts: first horizontal film runs full width;
            other horizontals take 9 columns and verticals 3 so a film + reel
            share a row. */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-16 lg:mt-20 lg:gap-x-10 lg:gap-y-20">
          {selectedWorks.map((item, index) => {
            const vertical = item.orientation === "vertical";
            const span = vertical
              ? "mx-auto w-full max-w-xs lg:col-span-3 lg:max-w-none"
              : index === 0
                ? "lg:col-span-12"
                : "lg:col-span-9";
            const key = `items.${item.id}`;

            return (
              <Reveal
                key={item.id}
                delay={index * 60}
                className={`col-span-12 ${span}`}
              >
                <PortfolioVideo
                  src={item.video}
                  poster={item.poster}
                  videoType={item.orientation}
                  label={t.has(`${key}.title`) ? t(`${key}.title`) : item.id}
                />
                {t.has(`${key}.title`) && (
                  <div className="mt-6 max-w-xl">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                      {t(`${key}.label`)}
                    </p>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
