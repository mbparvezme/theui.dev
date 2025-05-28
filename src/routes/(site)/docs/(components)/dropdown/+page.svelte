<SEO title="Dropdown" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/dropdown.svx"

  const component =   {
    "dropdown": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "label",
            "type": "string | Snippet",
            "description": "The label or trigger content for the dropdown.",
            "default": "undefined"
          },
          {
            "name": "width",
            "type": "'sm' | 'md' | 'lg' | 'full' | 'auto' | 'custom'",
            "description": "Specifies the width of the dropdown container. If set to 'custom', the width class defined in dropdownClasses will be applied.",
            "default": "\"auto\""
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
            "description": "Defines the event that triggers the dropdown.",
            "default": "\"click\""
          },
          {
            "name": "animation",
            "type": "'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out'",
            "description": "Defines the type of dropdown animation.",
            "default": "\"slide-up\""
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "description": "Controls the speed of dropdown animations.",
            "default": "\"fast\""
          },
          {
            "name": "backdrop",
            "type": "boolean | string",
            "description": "Defines if a backdrop should be displayed behind the dropdown.",
            "default": "false"
          },
          {
            "name": "closeOnBlur",
            "type": "boolean",
            "description": "Determines whether the dropdown should close when losing focus.",
            "default": "true"
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
            "default": "\"\""
          },
          {
            "name": "dropdownClasses",
            "type": "string",
            "description": "Custom classes for the dropdown content.",
            "default": "\"\""
          },
          {
            "name": "linkClasses",
            "type": "string",
            "description": "Custom classes for regular dropdown links.",
            "default": "\"\""
          },
          {
            "name": "activeLinkClasses",
            "type": "string",
            "description": "Custom classes for active dropdown links.",
            "default": "\"\""
          },
          {
            "name": "headerClasses",
            "type": "string",
            "description": "Custom classes for header items.",
            "default": "\"\""
          },
          {
            "name": "dividerClasses",
            "type": "string",
            "description": "Custom classes for divider items.",
            "default": "\"\""
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
            "name": "label",
            "description": "Specifies the label or trigger content for the dropdown, which can be a simple text or a custom snippet for more complex designs."
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
            "name": "url",
            "type": "string | undefined",
            "description": "URL for the dropdown item, applicable if the type is 'link'.",
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
            "description": "Defines the preload behavior for the dropdown item.",
            "default": "\"hover\""
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
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
