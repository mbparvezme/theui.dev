<SEO title="Helper Text" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/helper-text.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "content",
          "type": "string | Snippet",
          "default": "null",
          "description": "Content of the helper text."
        }
      ]
    }
  ]
</script>
