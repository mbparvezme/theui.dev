<SEO title="Helper Text" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/helper-text.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "id",
          "type": "string",
          "default": "&lt;RANDOM STRING&gt;",
          "description": "The id of the helper text element. Use it with <code>aria-describedby</code> on your input."
        },
        {
          "name": "class",
          "type": "string",
          "default": "undefined",
          "description": "Custom classes merged with the default helper text styles."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The helper text content. It is required; a HelperText without content renders nothing."
        }
      ]
    }
  ]
</script>
