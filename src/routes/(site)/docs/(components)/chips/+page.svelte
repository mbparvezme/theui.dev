<SEO title="Chips" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/chips.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "close",
          "type": "boolean",
          "description": "Determines whether a close button is displayed on the chip. Set to false to hide the close button.",
          "default": true
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg'",
          "description": "Sets the size of the chip, affecting padding and image dimensions. 'md' is the default size.",
          "default": "\"md\""
        },
        {
          "name": "imageUrl",
          "type": "string | undefined",
          "description": "The URL of the image to display within the chip. Leave undefined if no image is used.",
          "default": "undefined"
        },
        {
          "name": "imageClasses",
          "type": "string",
          "description": "Custom CSS classes to apply to the chip's image for additional styling.",
          "default": ""
        },
        {
          "name": "altText",
          "type": "string",
          "description": "The alternative text for the chip's image, enhancing accessibility.",
          "default": ""
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "description": "Determines the border-radius style of the chip for rounded corners.",
          "default": "\"full\""
        }
      ]
    }
  ]
</script>
