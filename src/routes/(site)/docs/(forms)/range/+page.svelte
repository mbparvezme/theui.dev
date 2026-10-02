<SEO title="Range" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/range.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "number",
          "default": "0",
          "description": "The chosen number. Bindable with <code>bind:value</code>."
        },
        {
          "name": "min",
          "type": "number",
          "default": "0",
          "description": "Lowest value of the range."
        },
        {
          "name": "max",
          "type": "number",
          "default": "100",
          "description": "Highest value of the range."
        },
        {
          "name": "step",
          "type": "number",
          "default": "1",
          "description": "How far the value moves at a time."
        },
        {
          "name": "showValue",
          "type": "boolean | \"inline\" | \"tooltip\"",
          "default": "false",
          "description": "Shows the value beside the slider, or in a bubble over the handle with \"tooltip\"."
        },
        {
          "name": "format",
          "type": "(value: number) => string",
          "default": "(v) => String(v)",
          "description": "Turns the number into the text shown, and into the value read by screen readers."
        },
        {
          "name": "ticks",
          "type": "<a href=\"/docs/types#range-tick-type\">RANGE_TICK</a>[]",
          "default": "undefined",
          "description": "Marks under the track. Numbers, or objects with a value and a label."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "Resets all default styles and applies only custom styles."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Thickness of the track and size of the handle. Inherited from Form or Fieldset."
        },
        {
          "name": "helperText",
          "type": "string | Snippet",
          "default": "undefined",
          "description": "Text under the field, linked to the input for screen readers."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the label."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the field wrapper."
        },
        {
          "name": "rangeClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the range input itself."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the range input, merged with the default classes. The filled track and the handle follow the text colour."
        },
        {
          "name": "disabled",
          "description": "Switches the field off."
        },
        {
          "name": "name",
          "description": "Name of the field, so the value is submitted with the form."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "Label of the field."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": null
    }
  ]
</script>
