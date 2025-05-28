<SEO title="Tooltip" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/tooltip.svx"
  import SEO from "$lib/SEO.svelte"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "position",
          "type": "<a href=\"/docs/types#placement\">Placement</a>",
          "default": "top",
          "description": "Controls where the tooltip appears relative to the trigger element."
        },
        {
          "name": "triggerEvent",
          "type": "'hover' | 'click'",
          "default": "hover",
          "description": "Determines how the tooltip is triggered, either on hover or click."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "normal",
          "description": "Sets the animation speed for showing and hiding the tooltip."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "lg",
          "description": "Defines the border-radius of the tooltip for corner styling."
        },
        {
          "name": "gap",
          "type": "number",
          "default": 12,
          "description": "Specifies the spacing between the tooltip and the trigger element."
        }
      ]
    }
  ]
</script>