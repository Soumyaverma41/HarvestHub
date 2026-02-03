/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://akxbrand.com',
  generateRobotsTxt: true,
  exclude: [
    '/admin*',
    '/network-error',
    '/login',
    '/register',
    '/account',
    '/orders',
    '/cart',
    '/checkout',
    '/admin-login',
    '/test-*'
  ],
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/admin',
          '/admin/',
          '/admin/*',
          '/network-error',
          '/login',
          '/register',
          '/account',
          '/orders',
          '/cart',
          '/checkout',
          '/admin-login'
        ],
      },
    ],
  },
  // Include our dynamically generated sitemap
  additionalPaths: async (config) => {
    return [];
  },
  sitemapSize: 5000, // Increase limit to avoid splitting
}