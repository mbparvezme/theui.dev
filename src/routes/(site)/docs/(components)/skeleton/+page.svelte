<SEO title="Skeleton" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/skeleton.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#skeleton-variant-type\">SKELETON_VARIANT</a>",
          "default": "\"rect\"",
          "description": "Shape of the placeholder: \"rect\", \"circle\" or \"text\"."
        },
        {
          "name": "animation",
          "type": "<a href=\"/docs/types#skeleton-animation-type\">SKELETON_ANIMATION</a>",
          "default": "\"pulse\"",
          "description": "How the placeholder moves: \"pulse\", \"wave\" or \"none\". Both animations stop for users who prefer reduced motion."
        },
        {
          "name": "lines",
          "type": "number",
          "default": "1",
          "description": "Number of lines of the \"text\" variant. With more than one, the last line is shorter."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the \"rect\" and \"text\" variants. The \"circle\" variant is always round."
        },
        {
          "name": "lineClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for every line of the \"text\" variant."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the placeholder, merged with the default classes. Its size and colour are set here."
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
