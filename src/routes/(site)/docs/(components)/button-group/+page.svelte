<SEO title="Button Group" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/button-group.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "stacked",
          "type": "boolean",
          "description": "Determines if the buttons are stacked vertically.",
          "default": "false"
        },
        {
          "name": "outline",
          "type": "boolean",
          "description": "Applies an outlined style to the button group.",
          "default": "false"
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#button-size-type\">BUTTON_SIZE</a>",
          "description": "Specifies the size of the buttons in the group.",
          "default": "\"md\""
        },
        {
          "name": "square",
          "type": "boolean",
          "description": "Determines if the buttons in the group are square.",
          "default": "false"
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "description": "Controls the rounded corners of the buttons in the group.",
          "default": "\"md\""
        },
        {
          "name": "variant",
          "type": "'bordered' | 'flat'",
          "description": "Defines the visual style of the button group, either with borders between buttons or flat with no borders.",
          "default": "\"flat\""
        },
        {
          "name": "color",
          "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
          "description": "Defines the color scheme of the button group.",
          "default": "\"brand\""
        },
        {
          "name": "theme",
          "type": "'default' | 'light' | 'gradient'",
          "description": "Sets the overall theme of the button group, affecting colors and styles.",
          "default": "\"default\""
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Controls the animation speed for the button group.",
          "default": "\"normal\""
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "description": "Custom ARIA label for accessibility, describing the button group.",
          "default": "\"Button group\""
        }
      ]
    }
  ]
</script>
