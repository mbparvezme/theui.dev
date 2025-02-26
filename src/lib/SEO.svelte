<script lang="ts">
  import { page } from "$app/state"

  interface DataType { title?: string | null, description?: string, keywords?: string | null, img?: string, video?: string | null, canonical?: string | null, schema?: object | null }

  let {
    title,
    description,
    img,
    keywords,
    video,
    canonical,
    schema
  }: DataType = $props()


  const pageTitle: string = (title ? (title + " | ") : "") + "TheUI: Component Library,Theme & UI Blocks"
  const url: string = page.url.origin + page.url.pathname
  const pageDescription = description || "..........."
  const pageImage = img || "/assets/img/theui-logo.png?v=1"
  const pageKeywords = keywords || "svelte, sveltekit, component, component library, button component, modern ui, javascript"
  const pageVideo = video || null
  const pageCanonical = canonical || null
  const pageSchema = schema || null

  const websiteSchemaScript = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheUI Svelte",
    "url": "https://www.theui.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.theui.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
</script>

  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle} />
    <meta name="description" content={pageDescription} />
    <meta name="image" content={pageImage} />
    <meta name="keywords" content={pageKeywords} />

    <!--Schema.org for Google -->
    <meta itemprop="name" content={pageTitle} />
    <meta itemprop="description" content={pageDescription} />
    <meta itemprop="image" content={pageImage} />

    {#if pageCanonical}
      <link rel="canonical" href={pageCanonical} />
    {/if}

  {#if pageSchema}
    {@html '<script type="application/ld+json">'+ JSON.stringify(pageSchema) + '</script>'}
  {/if}
  {@html '<script type="application/ld+json">'+ JSON.stringify(websiteSchemaScript) + '</script>'}
</svelte:head>