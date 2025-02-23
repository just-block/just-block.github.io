/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://just-block.github.io',
  basePath: '/just-block-landing',
  generateRobotsTxt: true,
  exclude: [
    '/icon.png',
    '/en/welcome',
  ],
  additionalPaths: async (config) => {
    const result = []

    result.push({
      loc: '/privacy-policy',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })

    return result
  }
}
