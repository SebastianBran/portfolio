import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/lib/constants";

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
}

export function SeoHead({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  type = "website",
}: SeoHeadProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={SITE_CONFIG.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
