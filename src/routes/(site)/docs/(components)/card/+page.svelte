<SEO title="Card" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/card.svx"
  import SEO from "$lib/SEO.svelte"
  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "title",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "The title of the component, which can be a string or a Snippet."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the component."
        },
        {
          "name": "shadow",
          "type": "<a href=\"/docs/types#shadow-types\">SHADOW</a>",
          "default": "\"md\"",
          "description": "Specifies the shadow depth for the component."
        },
        {
          "name": "topImage",
          "type": "Snippet | <a href=\"/docs/types#card-image-type\">CARD_IMAGE_TYPE</a>",
          "default": "undefined",
          "description": "An optional top image, which can be a Snippet or an object with image properties."
        },
        {
          "name": "bottomImage",
          "type": "Snippet | <a href=\"/docs/types#card-image-type\">CARD_IMAGE_TYPE</a>",
          "default": "undefined",
          "description": "An optional bottom image, which can be a Snippet or an object with image properties."
        },
        {
          "name": "contentClasses",
          "type": "string",
          "default": "null",
          "description": "CSS classes for styling the content area."
        },
        {
          "name": "titleClasses",
          "type": "string",
          "default": "null",
          "description": "CSS classes for styling the title."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "horizontal",
          "description": "If true, displays the component in a horizontal layout."
        }
      ]
    }
  ]
</script>
