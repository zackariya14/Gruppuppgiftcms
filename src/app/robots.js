export default function Robots() {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        sitemap: 'https://gruppuppgiftcms.vercel.app/sitemap.xml',
      }
}