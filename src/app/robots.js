export default function Robots() {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        sitemap: 'http://localhost:3000/sitemap.xml',
      }
}