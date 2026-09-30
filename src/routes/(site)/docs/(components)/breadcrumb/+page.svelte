<SEO title="Breadcrumb" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/breadcrumb.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "data",
          "type": "Array&lt;<a href=\"/docs/types#breadcrumb-data-type\">BREADCRUMB_DATA</a>&gt;",
          "default": "[]",
          "description": "An array of breadcrumb items to display. Each item's text must be unique."
        },
        {
          "name": "activeLinkClasses",
          "type": "string",
          "default": "\"text-gray-400\"",
          "description": "CSS classes applied to the active breadcrumb link."
        },
        {
          "name": "linkClasses",
          "type": "string",
          "default": "\"text-brand-500\"",
          "description": "CSS classes applied to the non-active breadcrumb links."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the breadcrumb container and its items."
        },
        {
          "name": "separator",
          "type": "string",
          "default": "\"/\"",
          "description": "The character or element used to separate breadcrumb items."
        }
      ]
    }
  ]
</script>
