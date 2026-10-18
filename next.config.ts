import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Fewer srcset entries keep the HTML lean (better text-to-code ratio).
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256, 384],
  },
};

export default withNextIntl(nextConfig);
