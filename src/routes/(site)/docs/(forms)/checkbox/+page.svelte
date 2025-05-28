<SEO title="Checkbox" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/checkbox.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "unknown",
          "default": "null",
          "description": "Defines the value of the checkbox when selected."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Controls the size of the checkbox. Available options: \"sm\", \"md\", \"lg\", \"xl\"."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Determines the animation speed for state changes. Options: \"none\", \"normal\", \"fast\", \"slow\"."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border-radius of the checkbox. Options: \"none\", \"sm\", \"md\", \"lg\", \"full\"."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "false",
          "description": "If set to true, removes all default styles, allowing full customization."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for styling the label. Inherits from the parent Form component if available."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Additional classes for styling the main wrapper of the checkbox."
        }
      ]
    }
  ]
</script>