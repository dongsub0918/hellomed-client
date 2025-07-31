// next-sitemap.mjs

module.exports = {
  siteUrl: "https://www.hello-med.com", // Your website URL
  generateRobotsTxt: true, // Optional: generate robots.txt automatically
  generateIndexSitemap: true,
  exclude: ["/admin/*", "/check-in/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/check-in/"],
      },
    ],
    additionalSitemaps: ["https://www.hello-med.com/sitemap.xml"],
  },
  // Additional options can be added as needed
};
