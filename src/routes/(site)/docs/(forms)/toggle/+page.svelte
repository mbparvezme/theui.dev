<SEO title="Toggle" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/toggle.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "type",
          "type": "\"checkbox\" | \"radio\"",
          "default": "\"checkbox\"",
          "description": "Specifies whether the toggle functions as a checkbox or a radio button."
        },
        {
          "name": "value",
          "type": "unknown",
          "default": "undefined",
          "description": "Value of the toggle input. It could be anything, text, numeric or boolean!"
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Defines the size of the toggle."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Controls the animation speed when toggling."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"full\"",
          "description": "Defines the border-radius of the toggle switch."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom CSS classes applied to the wrapper div."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Form component or \"\"",
          "description": "Custom CSS classes for styling the label. Inherits from the Form component if available."
        }
      ]
    }
  ]
</script>
