import { useTranslations } from "next-intl";
import { featuredProject } from "@/content/projects";
import { PortfolioVideo } from "./PortfolioVideo";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  const t = useTranslations("selectedWork");

  return (
    <section id="work" className="bg-black py-28 text-white lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] text-white/50">
            {t("eyebrow")}
          </p>
        </Reveal>

        {/* Featured — cinematic walkthrough */}
        <Reveal delay={60}>
          <div className="mt-8">
            <PortfolioVideo
              src={featuredProject.video}
              poster={featuredProject.thumbnail}
              videoType="horizontal"
              label={t("walkthrough.title")}
            />
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-white/50">
                  {t("walkthrough.tag")} · {t("walkthrough.location")}
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  {t("walkthrough.title")}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 lg:text-base">
                  {t("walkthrough.description")}
                </p>
              </div>
              <p className="shrink-0 text-xs font-medium tracking-[0.15em] text-white/40 sm:text-right">
                {t("walkthrough.kicker")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Aerial */}
        <Reveal delay={80}>
          <div className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
            <PortfolioVideo
              src={featuredProject.aerial.video}
              poster={featuredProject.aerial.thumbnail}
              videoType="horizontal"
              label={t("aerial.label")}
            />
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-white/50">
                {t("aerial.label")}
              </p>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl">
                {t("aerial.heading")}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                {t("aerial.body")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Social reels */}
        <Reveal delay={100}>
          <div className="mt-24 flex flex-col items-center gap-10 border-t border-white/10 pt-24 text-center lg:mt-32 lg:pt-32">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-white/50">
                {t("social.label")}
              </p>
              <h3 className="mx-auto mt-4 max-w-lg font-display text-2xl sm:text-3xl">
                {t("social.heading")}
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65">
                {t("social.body")}
              </p>
            </div>
            <div className="w-full max-w-[300px]">
              <PortfolioVideo
                src={featuredProject.social.video}
                poster={featuredProject.social.thumbnail}
                videoType="vertical"
                label={t("social.label")}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
