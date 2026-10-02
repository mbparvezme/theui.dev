<SEO title="Divider" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/divider.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "orientation",
          "type": "<a href=\"/docs/types#divider-orientation-type\">DIVIDER_ORIENTATION</a>",
          "default": "\"horizontal\"",
          "description": "Direction of the line: \"horizontal\" or \"vertical\". A vertical divider takes the height of its parent."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#divider-variant-type\">DIVIDER_VARIANT</a>",
          "default": "\"solid\"",
          "description": "Line style: \"solid\", \"dashed\" or \"dotted\"."
        },
        {
          "name": "align",
          "type": "<a href=\"/docs/types#divider-align-type\">DIVIDER_ALIGN</a>",
          "default": "\"center\"",
          "description": "Where the label sits along the line: \"start\", \"center\" or \"end\". Only used when there is a label."
        },
        {
          "name": "lineClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the line, such as its colour or thickness."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the label."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the divider element, merged with the default classes. Spacing belongs here."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "Label placed in the middle of the line. Without it the component renders a plain rule."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": null
    }
  ]
</script>
