import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("common");

  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[60] -translate-y-20 bg-ink px-4 py-2 text-sm text-bg transition-transform focus:translate-y-0"
    >
      {t("skipToContent")}
    </a>
  );
}
