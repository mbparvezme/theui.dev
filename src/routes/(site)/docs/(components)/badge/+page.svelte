<SEO title="Badge" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/badge.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "ariaTitle",
          "type": "string | undefined",
          "default": "undefined",
          "description": "Provides an accessible title for screen readers."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"full\"",
          "description": "Defines the border radius of the component."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "grow",
          "description": "Determines if the component should grow to match the parent element's font size."
        },
        {
          "name": "topFixed",
          "description": "Fixes the component to the top of its container."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": null
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": null
    }
  ]
</script>
