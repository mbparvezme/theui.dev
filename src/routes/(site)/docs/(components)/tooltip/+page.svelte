<SEO title="Tooltip" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/tooltip.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "position",
          "type": "<a href=\"/docs/types#placement\">Placement</a>",
          "default": "\"top\"",
          "description": "Controls where the tooltip appears relative to the trigger element. Can be overridden per trigger with <code>data-tooltip-position</code>."
        },
        {
          "name": "triggerEvent",
          "type": "'hover' | 'click'",
          "default": "\"hover\"",
          "description": "Determines how the tooltip is triggered, either on hover or click. Can be overridden per trigger with <code>data-tooltip-event</code>."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Sets the animation speed for showing and hiding the tooltip. Can be overridden per trigger with <code>data-tooltip-animation-speed</code>."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"lg\"",
          "description": "Defines the border-radius of the tooltip for corner styling. Can be overridden per trigger with <code>data-tooltip-rounded</code>."
        },
        {
          "name": "gap",
          "type": "number",
          "default": "12",
          "description": "Specifies the spacing (in px) between the tooltip and the trigger element. The minimum is 8. Can be overridden per trigger with <code>data-tooltip-gap</code>."
        }
      ]
    }
  ]
</script>