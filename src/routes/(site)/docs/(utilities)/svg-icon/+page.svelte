<SEO title="SVG Component" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/svg-icon.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "size",
          "type": "number",
          "default": "1",
          "description": "It is a multiplier to the current font size to determine the icon's dimensions. A value of 1 renders the icon at the same size (1em) as the surrounding text."
        },
        {
          "name": "viewBox",
          "type": "string",
          "default": "0 0 16 16",
          "description": "Sets the viewBox size of the icon."
        },
        {
          "name": "focusable",
          "type": "boolean",
          "default": "true",
          "description": "Indicating whether the icon should be focusable via keyboard navigation. "
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
