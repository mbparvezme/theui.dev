<SEO title="SVG Component" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/svg-icon.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "size",
          "type": "number",
          "default": "1",
          "description": "Sets the icon's width and height in rem. A value of 1 renders the icon at 1rem."
        },
        {
          "name": "viewBox",
          "type": "string",
          "default": "\"0 0 16 16\"",
          "description": "Sets the viewBox size of the icon."
        },
        {
          "name": "focusable",
          "type": "boolean",
          "default": "false",
          "description": "Indicating whether the icon should be focusable via keyboard navigation. When false, the icon is also hidden from screen readers."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "stroke",
          "type": "N/A",
          "default": "N/A",
          "description": "When set, it changes the icon's styling from filled to stroked, rendering the icon as an outline."
        }
      ]
    }
  ]
</script>
