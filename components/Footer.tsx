import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { EMAIL, INSTAGRAM_URL, YOUTUBE_URL } from "@/content/site";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-bg py-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-sm font-medium tracking-[0.18em]">
              PROPERTY FILM STUDIO
            </p>
            <p className="mt-2 text-sm text-ink-soft">{t("descriptor")}</p>
            <p className="mt-1 text-sm text-ink-soft">{t("location")}</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-ink-soft">
            {/* <a
              href={INSTAGRAM_URL}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              {t("links.instagram")}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            <a
              href={YOUTUBE_URL}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              {t("links.youtube")}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a> */}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Mail size={16} strokeWidth={1.5} />
              {t("links.email")}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright")}</p>
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </footer>
  );
}
