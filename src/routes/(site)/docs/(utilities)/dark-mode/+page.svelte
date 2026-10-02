<SEO title="Dark-mode" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/dark-mode.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "systemDefault",
          "type": "boolean",
          "default": "true",
          "description": "Determines how dark mode is handled. When true, the app initially adopts the system's preferred color scheme. A theme saved by the user takes priority."
        }
      ]
    }
  ]
</script>
