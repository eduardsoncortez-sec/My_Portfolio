// Set SITE_URL to the final public origin when deploying. Preview builds stay unindexed.
const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const socialImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Eduardson Cortez — Web Development, Systems & IT" }];

export function canonical(path: string) {
  return siteUrl ? { canonical: new URL(path, siteUrl).toString() } : undefined;
}
