<SEO title="Quick Action Button - QAB" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/qab.svx"

  const component = {
    "qab" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "align",
            "type": "'start' | 'end'",
            "default": "\"end\"",
            "description": "Defines the horizontal alignment of the buttons. Can be 'start' for left alignment or 'end' for right alignment."
          },
          {
            "name": "size",
            "type": "'sm' | 'md' | 'lg' | 'xl'",
            "default": "\"md\"",
            "description": "Specifies the size of the buttons. QAB items inherit it."
          },
          {
            "name": "direction",
            "type": "'horizontal' | 'vertical'",
            "default": "\"vertical\"",
            "description": "Sets the layout direction of the buttons. 'horizontal' arranges buttons side by side, while 'vertical' stacks them."
          },
          {
            "name": "triggerEvent",
            "type": "'click' | 'hover'",
            "default": "\"click\"",
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
            "default": "\"normal\"",
            "description": "Controls the speed of the animation."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "\"full\"",
            "description": "Determines the roundness of the button corners. QAB items inherit it."
          },
          {
            "name": "color",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "\"brand\"",
            "description": "Sets the primary color of the QAB button, affecting text, borders, or backgrounds depending on the theme. QAB items inherit it."
          },
          {
            "name": "theme",
            "type": "'default' | 'soft' | 'gradient'",
            "default": "\"default\"",
            "description": "Defines the overall theme of the QAB button. Use 'soft' for a softer style or 'gradient' for a gradient background. QAB items inherit it."
          },
          {
            "name": "gradientColor",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "\"brand\"",
            "description": "Specifies the gradient color when the 'theme' is set to 'gradient'. QAB items inherit it."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "description": "Accessible label for the main QAB button.",
            "default": "\"Quick Action Button\""
          },
          {
            "name": "iconClasses",
            "type": "string",
            "default": "undefined",
            "description": "Custom classes for the default icon of the QAB items. QAB items inherit it."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "disabled",
            "description": "Disables the main QAB button: dims it, blocks clicks and sets <code>aria-disabled=\"true\"</code>. The items can't be opened while it is disabled."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "icon",
            "description": "Custom icon for the main QAB button."
          },
          {
            "name": "children",
            "description": "The QAB items shown when the QAB is opened."
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
            "default": "Inherited from Qab or \"md\"",
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
            "default": "\"normal\"",
            "description": "Controls the speed of the animation."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "Inherited from Qab or \"full\"",
            "description": "Determines the roundness of the button corners."
          },
          {
            "name": "color",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "Inherited from Qab or \"brand\"",
            "description": "Sets the primary color of the QAB item, affecting text, borders, or backgrounds depending on the theme."
          },
          {
            "name": "theme",
            "type": "'default' | 'soft' | 'gradient'",
            "default": "Inherited from Qab or \"default\"",
            "description": "Defines the overall theme of the QAB item. Use 'soft' for a softer style or 'gradient' for a gradient background."
          },
          {
            "name": "gradientColor",
            "type": "'brand' | 'error' | 'info' | 'success' | 'warning'",
            "default": "Inherited from Qab or \"brand\"",
            "description": "Specifies the gradient color when the 'theme' is set to 'gradient'."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "description": "Accessible label for the QAB item. When not set, the item's content is used as its name; an item without content is named \"Quick Action Item\". Set it for icon-only items.",
            "default": "undefined"
          },
          {
            "name": "iconClasses",
            "type": "string",
            "default": "Inherited from Qab or \"\"",
            "description": "Custom classes for the default icon, shown when the item has no content."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "disabled",
            "description": "Disables the QAB item: dims it, blocks clicks and sets <code>aria-disabled=\"true\"</code>."
          }
        ]
      }
    ]
  }
</script>
