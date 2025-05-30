<SEO title="Input" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/input.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "type",
          "description": "Defines the input type.",
          "type": "<a href=\"/docs/types#input-type-type\">INPUT_TYPE</a>",
          "default": "\"text\""
        },
        {
          "name": "value",
          "description": "Sets the default value of the input.",
          "type": "string",
          "default": "undefined"
        },
        {
          "name": "helperText",
          "description": "Displays additional information below the input.",
          "type": "Snippet | string",
          "default": "undefined"
        },
        {
          "name": "variant",
          "description": "Controls the input's visual style. Available options: \"bordered\", \"flat\".",
          "type": "\"bordered\" | \"flat\"",
          "default": "\"bordered\""
        },
        {
          "name": "floatingLabel",
          "description": "Enables a floating label effect. Automatically enabled for the \"flat\" variant unless explicitly disabled.",
          "type": "boolean",
          "default": "variant === \"flat\" ? true : false"
        },
        {
          "name": "size",
          "description": "Defines the input size. Available options: \"sm\", \"md\", \"lg\", \"xl\".",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\""
        },
        {
          "name": "rounded",
          "description": "Controls the border-radius of the input. Available options: \"sm\", \"md\", \"lg\", \"xl\", \"full\", \"none\".",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\""
        },
        {
          "name": "animationSpeed",
          "description": "Defines the animation speed for transitions. Available options: \"none\", \"slower\", \"slow\", \"normal\", \"fast\", \"faster\".",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\""
        },
        {
          "name": "labelClasses",
          "description": "Applies custom styles to the label.",
          "type": "string",
          "default": "\"\""
        },
        {
          "name": "wrapperClasses",
          "description": "Applies custom styles to the input wrapper.",
          "type": "string",
          "default": "\"\""
        },
        {
          "name": "reset",
          "description": "Resets all default styles and applies only custom styles.",
          "type": "boolean",
          "default": "false"
        }
      ]
    }
  ]
</script>
