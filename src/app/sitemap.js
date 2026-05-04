const SITE_URL = "https://hackapura.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/links`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
