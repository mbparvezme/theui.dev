<SEO title="Close Button" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/close.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "size",
          "type": "number",
          "default": "1.5",
          "description": "Controls the size of the default close icon within the button."
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "default": "\"Close\"",
          "description": "Provides an accessible label for the close button, improving accessibility for screen readers."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the close button."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": [
        {
          "name": "onclick",
          "description": "Optional. Triggers when the close button is clicked. Type: <code>(e: MouseEvent) => void</code>."
        }
      ]
    }
  ]
</script>
