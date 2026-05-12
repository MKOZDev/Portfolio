export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
    ],

    sitemap: "https://mkozdev.com/sitemap.xml",

    host: "https://mkozdev.com",
  };
}
