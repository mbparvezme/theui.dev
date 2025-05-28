<SEO title="Progress Bar" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/progress-bar.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "start",
          "type": "number",
          "default": 0,
          "description": "The starting value of the progress bar. It defines the initial state of the progress. Recommended value: 0-100."
        },
        {
          "name": "end",
          "type": "number",
          "default": 0,
          "description": "The ending value of the progress bar. It defines the final state of the progress. Recommended value: 0-100."
        },
        {
          "name": "label",
          "type": "string",
          "default": "undefined",
          "description": "The label text to display on the progress bar."
        },
        {
          "name": "labelVariant",
          "type": "'inline' | 'bubble'",
          "default": "bubble",
          "description": "Controls the appearance of the label. 'inline' displays the label inline, inside the progress bar, while 'bubble' displays it in a bubble format."
        },
        {
          "name": "bubbleClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes to style the bubble label when 'labelVariant' is set to 'bubble'."
        },
        {
          "name": "thickness",
          "type": "'px' | 'sm' | 'md' | 'lg' | 'xl'",
          "default": "\"md\"",
          "description": "Determines the thickness of the progress bar. 'px' is the thinnest, and 'xl' is the thickest."
        },
        {
          "name": "barClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes to apply to the progress bar itself."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "full",
          "description": "Controls the rounded corners of the progress bar. This helps maintain design consistency."
        },
        {
          "name": "id",
          "type": "string",
          "default": "&lt;RANDOM STRING&gt;",
          "description": "A unique identifier for the progress bar. If not provided, a unique ID is generated."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "vertical",
          "description": "When set, the progress bar will be displayed vertically. Otherwise, it will be horizontal."
        }
      ]
    }
  ]
</script>
