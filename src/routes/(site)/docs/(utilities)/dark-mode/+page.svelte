<SEO title="Dark-mode" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/dark-mode.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "systemDefault",
          "type": "boolean",
          "default": "true",
          "description": "Determines how dark mode is handled. When true, the app initially adopts the system's preferred color scheme."
        }
      ]
    }
  ]
</script>
