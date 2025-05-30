<SEO title="Quick Action Button - QAB" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/qab.svx"

  const component = {
    "qab" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "align",
            "type": "'start' | 'end'",
            "default": "end",
            "description": "Defines the horizontal alignment of the buttons. Can be 'start' for left alignment or 'end' for right alignment."
          },
          {
            "name": "size",
            "type": "'sm' | 'md' | 'lg' | 'xl'",
            "default": "md",
            "description": "Specifies the size of the buttons."
          },
          {
            "name": "direction",
            "type": "'horizontal' | 'vertical'",
            "default": "vertical",
            "description": "Sets the layout direction of the buttons. 'horizontal' arranges buttons side by side, while 'vertical' stacks them."
          },
          {
            "name": "triggerEvent",
            "type": "'click' | 'hover'",
            "default": "click",
            "description": "Specifies how the button is activated. Can be 'click' for click activation or 'hover' for activation on hover."
          },
          {
            "name": "href",
            "type": "string",
            "default": "undefined",
            "description": "If set, the button functions as a link to the specified URL."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "default": "normal",
            "description": "Controls the speed of the animation."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "md",
            "description": "Determines the roundness of the button corners."
          },
          {
            "name": "color",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "'brand'",
            "description": "Sets the primary color of the dropdown, affecting text, borders, or backgrounds depending on the theme."
          },
          {
            "name": "theme",
            "type": "'default' | 'light' | 'gradient'",
            "default": "'default'",
            "description": "Defines the overall theme of the QAB button. Use 'light' for a brighter style or 'gradient' for a gradient background."
          },
          {
            "name": "gradientColor",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "'brand'",
            "description": "Specifies the gradient color when the 'theme' is set to 'gradient'."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "description": "Accessible label for the button, defaults to the button label if it's a string.",
            "default": "\"Quick Action Button\""
          },
          {
            "name": "iconClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Allows custom classes to be added to the icon for additional styling."
          }
        ]
      }
    ],
    "item": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "size",
            "type": "'sm' | 'md' | 'lg' | 'xl'",
            "default": "md",
            "description": "Specifies the size of the buttons."
          },
          {
            "name": "href",
            "type": "string",
            "default": "undefined",
            "description": "If set, the button functions as a link to the specified URL."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "default": "normal",
            "description": "Controls the speed of the animation."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "md",
            "description": "Determines the roundness of the button corners."
          },
          {
            "name": "color",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "'brand'",
            "description": "Sets the primary color of the QAB item, affecting text, borders, or backgrounds depending on the theme."
          },
          {
            "name": "theme",
            "type": "'default' | 'light' | 'gradient'",
            "default": "'default'",
            "description": "Defines the overall theme of the QAB button. Use 'light' for a brighter style or 'gradient' for a gradient background."
          },
          {
            "name": "gradientColor",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "'brand'",
            "description": "Specifies the gradient color when the 'theme' is set to 'gradient'."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "description": "Accessible label for the button, defaults to the button label if it's a string.",
            "default": "\"Quick Action Item\""
          },
          {
            "name": "iconClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Allows custom classes to be added to the icon for additional styling."
          }
        ]
      }
    ]
  }
</script>