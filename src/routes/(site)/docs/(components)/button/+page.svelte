<SEO title="Button" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/button.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "beforeLabel",
          "type": "Snippet",
          "description": "Custom content to display before the button label.",
          "default": "undefined"
        },
        {
          "name": "afterLabel",
          "type": "Snippet",
          "description": "Custom content to display after the button label.",
          "default": "undefined"
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Controls the animation speed of the button.",
          "default": "\"normal\""
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "description": "Accessible label for the button, defaults to the button label if it's a string.",
          "default": "\"Button\""
        },
        {
          "name": "newTabIcon",
          "type": "boolean",
          "description": "Display an arrow that indicates the link will open a new tab. It will only be visible if the button has an href with a \"target\" attribute.",
          "default": "false"
        },
        {
          "name": "href",
          "type": "string | undefined",
          "description": "URL to navigate to when the button is clicked, converting the button into a link.",
          "default": "undefined"
        },
        {
          "name": "outline",
          "type": "boolean",
          "description": "Whether the button should have an outline style.",
          "default": "false"
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "description": "Specifies the rounded corners of the button.",
          "default": "\"md\""
        },
        {
          "name": "shadow",
          "type": "<a href=\"/docs/types#shadow-types\">SHADOW</a>",
          "description": "Controls the shadow of the button.",
          "default": "\"md\""
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#button-size-type\">BUTTON_SIZE</a>",
          "description": "Specifies the size of the button.",
          "default": "\"md\""
        },
        {
          "name": "square",
          "type": "boolean",
          "description": "Whether the button should be a square.",
          "default": "false"
        },
        {
          "name": "theme",
          "type": "'default' | 'light' | 'gradient'",
          "description": "Theme of the button, determining its overall style.",
          "default": "\"default\""
        },
        {
          "name": "gradientColors ",
          "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
          "description": "Defies the base color of the gradient theme.",
          "default": "\"brand\""
        },
        {
          "name": "color",
          "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
          "description": "The color of the button, indicating its purpose.",
          "default": "\"brand\""
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "description": "Specifies the type of button, such as button, submit, or reset.",
          "default": "\"button\""
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": null
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "beforeLabel",
          "description": "Custom content to display before the button label."
        },
        {
          "name": "afterLabel",
          "description": "Custom content to display after the button label."
        }
      ]
    }
  ]
</script>
