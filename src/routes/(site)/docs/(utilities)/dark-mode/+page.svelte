<SEO title="Dark-mode" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/dark-mode.svx"
  import SEO from "$lib/SEO.svelte"

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
