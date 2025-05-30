<SEO title="Pagination" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/pagination.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "data",
          "type": "Array<{url: string, active?: boolean}>",
          "default": "[]",
          "description": "An array of pagination links, where each object contains a URL and an optional active state."
        },
        {
          "name": "align",
          "type": "'start' | 'center' | 'end'",
          "default": "\"center\"",
          "description": "Defines the alignment of the pagination. Options are 'start' for left, 'center' for middle, and 'end' for right."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#button-size-type\">BUTTON_SIZE</a>",
          "default": "\"md\"",
          "description": "Controls the size of the pagination buttons. Accepts predefined button size values."
        },
        {
          "name": "previousButton",
          "type": "string",
          "default": "\"&larr; Prev\"",
          "description": "Defines the text or HTML content for the previous button."
        },
        {
          "name": "nextButton",
          "type": "string",
          "default": "\"Next &rarr;\"",
          "description": "Defines the text or HTML content for the next button."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Determines the border radius of the pagination buttons."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Controls the animation speed of pagination interactions. Options include 'none', 'slower', 'slow', 'normal', 'fast', and 'faster'."
        },
        {
          "name": "activeButtonClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom CSS classes to style the active pagination button."
        },
        {
          "name": "buttonClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom CSS classes to style all pagination buttons."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "flat",
          "description": "This attribute makes the Pagination border-less to make it flat and minimalist."
        },
        {
          "name": "hidePrevious",
          "description": "This attributes hides the previous button in the Pagination."
        },
        {
          "name": "hideNext",
          "description": "This attributes hides the next button in the Pagination."
        },
        {
          "name": "hidePreviousNext",
          "description": "This attributes hides both previous and next button in the Pagination."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": [
        {
          "name": "onPreviousClick",
          "description": "Triggers on click on the previous button."
        },
        {
          "name": "onNextClick",
          "description": "Triggers on click on the next button."
        }
      ]
    }
  ]
</script>
