<SEO title="Select" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/select.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "options",
          "type": "<a href=\"/docs/types#select-data-type\">SELECT_DATA</a>[]",
          "default": "undefined",
          "description": "Array of options for the select input."
        },
        {
          "name": "value",
          "type": "string",
          "default": "\"\"",
          "description": "Sets the default selected value."
        },
        {
          "name": "variant",
          "type": "\"bordered\" | \"flat\"",
          "default": "\"bordered\"",
          "description": "Defines the visual style of the select input."
        },
        {
          "name": "label",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Defines the label for the select input."
        },
        {
          "name": "floatingLabel",
          "type": "boolean",
          "default": "variant === \"flat\" ? true : false",
          "description": "Enables floating label when label is used as a prop."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Controls the size of the select input."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the select input."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Controls the animation speed of the select input."
        },
        {
          "name": "helperText",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Provides additional information below the select input."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Applies custom styles to the label."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Applies custom styles to the wrapper element."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "false",
          "description": "Removes all default styles, applying only user-defined styles."
        }
      ]
    }
  ]
</script>
