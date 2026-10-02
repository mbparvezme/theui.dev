<SEO title="Chips" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/chips.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "close",
          "type": "boolean",
          "description": "Determines whether a close button is displayed on the chip. Set to true to show the close button.",
          "default": false
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg'",
          "description": "Sets the size of the chip's image. Only applies when imgSrc is set. 'md' is the default size.",
          "default": "\"md\""
        },
        {
          "name": "imgSrc",
          "type": "string | undefined",
          "description": "The URL of the image to display within the chip. Leave undefined if no image is used.",
          "default": "undefined"
        },
        {
          "name": "imgClasses",
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
        },
        {
          "name": "href",
          "type": "string | undefined",
          "description": "If set, the chip is rendered as a link (<code>&lt;a&gt;</code>) pointing to this URL instead of a <code>&lt;span&gt;</code>.",
          "default": "undefined"
        }
      ]
    }
  ]
</script>
