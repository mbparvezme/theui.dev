<SEO title="Dropdown" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/dropdown.svx"

  const component =   {
    "dropdown": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "label",
            "type": "string | Snippet",
            "description": "The label or trigger content for the dropdown. A string renders as plain text inside a Button; a Snippet is rendered as your own trigger.",
            "default": "undefined"
          },
          {
            "name": "width",
            "type": "'sm' | 'md' | 'lg' | 'full' | 'auto' | string",
            "description": "Width of the dropdown content. Besides the presets, any width class such as <code>w-[300px]</code> is applied as it is.",
            "default": "\"md\""
          },
          {
            "name": "align",
            "type": "'start' | 'end'",
            "description": "Controls the alignment of the dropdown content.",
            "default": "\"end\""
          },
          {
            "name": "triggerEvent",
            "type": "'hover' | 'click'",
            "description": "Defines the event that opens the dropdown.",
            "default": "\"click\""
          },
          {
            "name": "animation",
            "type": "'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out'",
            "description": "Defines the type of dropdown animation.",
            "default": "\"fade\""
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "description": "Controls the speed of dropdown animations.",
            "default": "\"fast\""
          },
          {
            "name": "arrowIcon",
            "type": "boolean | Snippet",
            "description": "Shows the chevron next to the trigger. Set it to false to hide it, or pass a Snippet to use your own icon.",
            "default": "true"
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "description": "Accessible name of the trigger. Only needed when the trigger has no visible text, such as an icon-only custom trigger.",
            "default": "undefined"
          },
          {
            "name": "backdrop",
            "type": "boolean | string",
            "description": "Shows a backdrop behind the dropdown. A string is used as the backdrop classes.",
            "default": "false"
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "description": "Controls the border radius of the dropdown.",
            "default": "\"md\""
          },
          {
            "name": "containerClasses",
            "type": "string",
            "description": "Custom classes for the dropdown container.",
            "default": "undefined"
          },
          {
            "name": "dropdownClasses",
            "type": "string",
            "description": "Custom classes for the dropdown content.",
            "default": "undefined"
          },
          {
            "name": "buttonClasses",
            "type": "string",
            "description": "Custom classes for the trigger button or your custom trigger.",
            "default": "undefined"
          },
          {
            "name": "itemClasses",
            "type": "string",
            "description": "Custom classes for regular dropdown items.",
            "default": "undefined"
          },
          {
            "name": "activeItemClasses",
            "type": "string",
            "description": "Custom classes for the active dropdown item.",
            "default": "undefined"
          },
          {
            "name": "headerClasses",
            "type": "string",
            "description": "Custom classes for header items.",
            "default": "undefined"
          },
          {
            "name": "dividerClasses",
            "type": "string",
            "description": "Custom classes for divider items.",
            "default": "undefined"
          },
          {
            "name": "id",
            "type": "string",
            "description": "Unique identifier for the dropdown element.",
            "default": "&lt;RANDOM STRING&gt;"
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The content of the dropdown menu, usually a list of DropdownItem components."
          },
          {
            "name": "label",
            "description": "Specifies the trigger content for the dropdown, for a custom trigger instead of the default button."
          },
          {
            "name": "arrowIcon",
            "description": "Replaces the default chevron shown next to the trigger."
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
            "name": "type",
            "type": "'link' | 'divider' | 'header' | 'button'",
            "description": "Specifies the type of the dropdown item.",
            "default": "\"link\""
          },
          {
            "name": "href",
            "type": "string",
            "description": "URL of the item. An item without an href renders as a button.",
            "default": "undefined"
          },
          {
            "name": "text",
            "type": "string",
            "description": "The item content as a string, instead of writing it inside the component. It renders as plain text.",
            "default": "undefined"
          },
          {
            "name": "startItem",
            "type": "Snippet",
            "description": "Snippet block displayed before the dropdown text, suitable for icons or images.",
            "default": "undefined"
          },
          {
            "name": "endItem",
            "type": "Snippet",
            "description": "Snippet block displayed after the dropdown text, suitable for badges or extra messages.",
            "default": "undefined"
          },
          {
            "name": "active",
            "type": "boolean",
            "description": "Indicates whether the dropdown item is active.",
            "default": "false"
          },
          {
            "name": "preload",
            "type": "<a href=\"/docs/types#dropdown-preload-type\">PRELOAD</a>",
            "description": "Defines the preload behavior of a link item.",
            "default": "\"hover\""
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The content of the item, used when the text prop is not set."
          },
          {
            "name": "startItem",
            "description": "Defines a custom snippet block to be displayed before the dropdown text, ideal for adding icons, images, or other media elements."
          },
          {
            "name": "endItem",
            "description": "Defines a custom snippet block to be displayed after the dropdown text, suitable for badges, extra messages, or any supplementary content."
          }
        ]
      }
    ]
  }
</script>
