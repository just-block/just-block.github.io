/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://just-block.com',
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
