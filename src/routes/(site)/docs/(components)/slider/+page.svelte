<SEO title="Slider" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/slider.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "controls",
          "type": "boolean",
          "default": true,
          "description": "Enables or disables navigation controls (previous/next buttons)."
        },
        {
          "name": "indicator",
          "type": "boolean",
          "default": true,
          "description": "Shows or hides slide indicators."
        },
        {
          "name": "autoPlay",
          "type": "boolean",
          "default": true,
          "description": "Enables automatic slide transition."
        },
        {
          "name": "stopOnHover",
          "type": "boolean",
          "default": true,
          "description": "Pauses autoPlay when the user hovers over the slider."
        },
        {
          "name": "slideDuration",
          "type": "number",
          "default": 5000,
          "description": "Duration (in milliseconds) each slide stays visible before transitioning."
        },
        {
          "name": "transitionDuration",
          "type": "number",
          "default": 750,
          "description": "Duration (in milliseconds) of the slide transition effect."
        },
        {
          "name": "timer",
          "type": "boolean",
          "default": true,
          "description": "Displays a timer indicating the remaining duration for the current slide."
        },
        {
          "name": "activeSlide",
          "type": "number",
          "default": 1,
          "description": "Sets the initially active slide (starting from index 1)."
        },
        {
          "name": "slideClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for individual slides."
        },
        {
          "name": "controlButtonClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for navigation control buttons."
        },
        {
          "name": "indicatorContainerClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for the container that holds slide indicators."
        },
        {
          "name": "indicatorClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for individual slide indicators."
        },
        {
          "name": "indicatorActiveClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for the active slide indicator."
        },
        {
          "name": "timerClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for the timer element."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "prevButton",
          "description": "Custom previous button for navigation."
        },
        {
          "name": "nextButton",
          "description": "Custom next button for navigation."
        }
      ]
    }
  ]
</script>
