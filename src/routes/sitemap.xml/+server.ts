import type { RequestHandler } from './$types'

const SITE_URL = 'https://www.theui.dev'

// Read straight from the route files, so a page added or renamed shows up here
// without anyone remembering to update a list.
const routeFiles = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))

const toPath = (file: string) =>
  file
    .replace('/src/routes', '')
    .replace('/+page.svelte', '')
    .split('/')
    .filter((segment) => !/^\(.*\)$/.test(segment)) // (group) folders are not part of the URL
    .join('/') || '/'

// The /example pages are the iframes inside the docs. They are not pages to land on.
const paths = [...new Set(routeFiles.map(toPath))]
  .filter((path) => !path.startsWith('/example'))
  .sort()

export const prerender = true

export const GET: RequestHandler = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    // Written exactly as the page's own canonical tag writes it, with no trailing slash
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  })
}
