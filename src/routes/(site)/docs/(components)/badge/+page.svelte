<SEO title="Badge" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/badge.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "ariaTitle",
          "type": "string | undefined",
          "default": "undefined",
          "description": "Names a badge that shows no text, such as a dot badge. Leave it off a badge with text: the label would replace that text for a screen reader."
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
          "name": "fixed",
          "description": "Fixes the component to the top of its container."
        },
        {
          "name": "class",
          "description": "Classes for the badge element, merged with the default classes."
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
