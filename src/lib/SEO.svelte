<script lang="ts">
  import { page } from "$app/state"

  interface DataType {
    title?: string | null,
    description?: string,
    keywords?: string | null,
    img?: string,
    // video?: string | null,
    canonical?: string | null,
    schema?: object | null,
    // Keeps a page out of search results. For fragments such as the iframe examples.
    noindex?: boolean
  }

  let {
    title,
    description,
    img,
    keywords,
    // video,
    canonical,
    schema,
    noindex = false
  }: DataType = $props()

  const SITE_URL = "https://www.theui.dev"
  const SITE_NAME = "TheUI"

  const pageTitle: string = $derived((title ? (title + " | ") : "") + "TheUI - Component Library, UI Blocks & Theme")
  const pageDescription = $derived(description || "Accessible, customizable Svelte 5 components built with Tailwind CSS v4. Forms, navigation, overlays and more, with examples and a full API for every component.")
  // Social networks read the image and the address from the page, so both have to be absolute
  const pageImage = $derived(new URL(img || "/assets/img/theui-logo.png?v=1", SITE_URL).href)
  const pageUrl = $derived(new URL(page.url.pathname, SITE_URL).href)
  const pageKeywords = $derived(keywords || "svelte, sveltekit, component, component library, button component, modern ui, javascript")
  // const pageVideo = $derived(video || null)
  const pageCanonical = $derived(canonical || pageUrl)
  const pageSchema = $derived(schema || null)

  const websiteSchemaScript = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheUI Svelte",
    "url": SITE_URL
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="title" content={pageTitle} />
  <meta name="description" content={pageDescription} />
  <meta name="image" content={pageImage} />
  <meta name="keywords" content={pageKeywords} />

  <!-- Open Graph: Facebook, LinkedIn, Slack, Discord -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={pageImage} />
  <meta property="og:image:alt" content={SITE_NAME} />

  <!-- The card image is the square logo, so the small card is the right one -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={pageImage} />

  <!--Schema.org for Google -->
  <meta itemprop="name" content={pageTitle} />
  <meta itemprop="description" content={pageDescription} />
  <meta itemprop="image" content={pageImage} />

  {#if noindex}
    <meta name="robots" content="noindex, follow" />
  {/if}

  <link rel="canonical" href={pageCanonical} />

  {#if pageSchema}
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-expressions -->
    {@const psc = '<script type="application/ld+json">' + JSON.stringify(pageSchema) + '</' + 'script>'}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html psc}
  {/if}

  {#if true}
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-expressions -->
    {@const wsc = '<script type="application/ld+json">' + JSON.stringify(websiteSchemaScript) + '</' + 'script>'}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html wsc}
  {/if}
</svelte:head>
