<SEO title="Time Picker" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/time-picker.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "string",
          "default": "\"\"",
          "description": "The chosen time as \"HH:mm\" in twenty four hour form, whatever the field shows. Bindable with <code>bind:value</code>."
        },
        {
          "name": "min",
          "type": "string",
          "default": "\"00:00\"",
          "description": "Earliest time that can be chosen, as \"HH:mm\"."
        },
        {
          "name": "max",
          "type": "string",
          "default": "\"23:59\"",
          "description": "Latest time that can be chosen, as \"HH:mm\"."
        },
        {
          "name": "step",
          "type": "number",
          "default": "1",
          "description": "How many minutes the minute part moves at a time."
        },
        {
          "name": "hour12",
          "type": "boolean",
          "default": "false",
          "description": "Shows the hour from 1 to 12 with an AM and PM part."
        },
        {
          "name": "amLabel",
          "type": "string",
          "default": "\"AM\"",
          "description": "Text of the morning half, for another language."
        },
        {
          "name": "pmLabel",
          "type": "string",
          "default": "\"PM\"",
          "description": "Text of the afternoon half, for another language."
        },
        {
          "name": "stepper",
          "type": "boolean",
          "default": "true",
          "description": "Shows the small up and down buttons. They act on the part that has focus, or on the minutes."
        },
        {
          "name": "clearable",
          "type": "boolean",
          "default": "true",
          "description": "Shows a button that empties the field once a time is set."
        },
        {
          "name": "onchange",
          "type": "(value: string) => void",
          "default": "undefined",
          "description": "Runs with the new value every time the time changes."
        },
        {
          "name": "name",
          "type": "string",
          "default": "undefined",
          "description": "Name of the field, so the \"HH:mm\" value is submitted with the form."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Size of the field. Inherited from Form or Fieldset."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "\"bordered\"",
          "description": "Style of the field: \"bordered\" or \"flat\". Inherited from Form or Fieldset."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form, or \"normal\"",
          "description": "Defines the animation speed for transitions. Available options: \"none\", \"slower\", \"slow\", \"normal\", \"fast\", \"faster\"."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "Resets all default styles and applies only custom styles."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border radius of the field."
        },
        {
          "name": "helperText",
          "type": "string | Snippet",
          "default": "undefined",
          "description": "Text under the field, linked to the group for screen readers."
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
          "name": "segmentClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the hour, minute and AM/PM parts."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the field, merged with the default classes."
        },
        {
          "name": "disabled",
          "description": "Switches every part off."
        },
        {
          "name": "readonly",
          "description": "Shows the time without letting anyone change it."
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
