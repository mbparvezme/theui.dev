<SEO title="Popover" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/popover.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "title",
          "type": "string | Snippet",
          "default": "undefined",
          "description": "Defines the title of the popover. Can be a string or a Snippet."
        },
        {
          "name": "trigger",
          "type": "string",
          "default": "undefined",
          "description": "ID of the element that triggers the popover. It is a required prop."
        },
        {
          "name": "position",
          "type": "<a href=\"/docs/types#placement\">Placement</a>",
          "default": "\"top\"",
          "description": "Specifies the position of the popover relative to the trigger."
        },
        {
          "name": "triggerEvent",
          "type": "\"click\" | \"hover\"",
          "default": "\"click\"",
          "description": "Defines how the popover is triggered—by click or hover."
        },
        {
          "name": "gap",
          "type": "number",
          "default": "8",
          "description": "Sets the distance between the trigger and the popover."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Controls the animation speed of the popover."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border-radius of the popover."
        },
        {
          "name": "shadow",
          "type": "<a href=\"/docs/types#shadow-types\">SHADOW</a>",
          "default": "\"lg\"",
          "description": "Controls the shadow intensity of the popover."
        },
        {
          "name": "closeOnClick",
          "type": "boolean",
          "default": "true",
          "description": "Determines whether the popover closes when clicking outside."
        },
        {
          "name": "titleClasses",
          "type": "string",
          "default": "null",
          "description": "Allows custom classes for styling the title."
        },
        {
          "name": "bodyClasses",
          "type": "string",
          "default": "null",
          "description": "Allows custom classes for styling the popover body."
        }
      ]
    }
  ]
</script>
