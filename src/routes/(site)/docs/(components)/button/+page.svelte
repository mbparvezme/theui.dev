<SEO title="Button" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/button.svx"

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
          "description": "Controls the animation speed of the button. Inherited from ButtonGroup if available.",
          "default": "\"normal\""
        },
        {
          "name": "actions",
          "type": "[action, params?][]",
          "description": "A list of Svelte actions applied to the button element, each as an <code>[action, params]</code> pair.",
          "default": "undefined"
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "description": "Accessible label for the button. When not set, screen readers use the visible button text. Use it for buttons without visible text, like icon-only buttons.",
          "default": "undefined"
        },
        {
          "name": "newTabIcon",
          "type": "boolean",
          "description": "Display an arrow that indicates the link will open a new tab. It will only be visible if the button has an href with a \"target\" attribute.",
          "default": "true"
        },
        {
          "name": "href",
          "type": "string | undefined",
          "description": "URL to navigate to when the button is clicked, converting the button into a link.",
          "default": "undefined"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Shows the button in its active (pressed) style. On a button (not a link) it also sets <code>aria-pressed=\"true\"</code>.",
          "default": "false"
        },
        {
          "name": "loading",
          "type": "boolean",
          "description": "Shows a spinner and the <code>loadingText</code>, and blocks clicks while loading.",
          "default": "false"
        },
        {
          "name": "loadingText",
          "type": "string",
          "description": "Text shown next to the spinner when <code>loading</code> is true. Set it to an empty string to show only the spinner.",
          "default": "\"Loading...\""
        },
        {
          "name": "outline",
          "type": "boolean",
          "description": "Whether the button should have an outline style. Inherited from ButtonGroup if available.",
          "default": "false"
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "description": "Specifies the rounded corners of the button. Inherited from ButtonGroup if available.",
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
          "description": "Specifies the size of the button. Inherited from ButtonGroup if available.",
          "default": "\"md\""
        },
        {
          "name": "square",
          "type": "boolean",
          "description": "Whether the button should be a square. Inherited from ButtonGroup if available.",
          "default": "false"
        },
        {
          "name": "theme",
          "type": "'default' | 'soft' | 'gradient'",
          "description": "Theme of the button, determining its overall style. Inherited from ButtonGroup if available.",
          "default": "\"default\""
        },
        {
          "name": "gradientColor",
          "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
          "description": "Defines the base color of the gradient theme. Inherited from ButtonGroup if available.",
          "default": "\"brand\""
        },
        {
          "name": "color",
          "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
          "description": "The color of the button, indicating its purpose. Inherited from ButtonGroup if available.",
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
      "data": [
        {
          "name": "disabled",
          "description": "Disables the button: dims it, blocks clicks and sets <code>aria-disabled=\"true\"</code>. On a button the native <code>disabled</code> attribute is set too; on a link the <code>href</code> is removed."
        }
      ]
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
