<SEO title="Date Picker" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/date-picker.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "string",
          "default": "\"\"",
          "description": "The chosen date as \"YYYY-MM-DD\". Bindable with <code>bind:value</code>."
        },
        {
          "name": "min",
          "type": "string",
          "default": "undefined",
          "description": "Earliest date that can be chosen, as \"YYYY-MM-DD\"."
        },
        {
          "name": "max",
          "type": "string",
          "default": "undefined",
          "description": "Latest date that can be chosen, as \"YYYY-MM-DD\"."
        },
        {
          "name": "disabledDates",
          "type": "(date: Date) => boolean",
          "default": "undefined",
          "description": "Asked about every day in the calendar. Return true to turn that day off."
        },
        {
          "name": "firstDayOfWeek",
          "type": "number",
          "default": "0",
          "description": "Day the week starts on, where 0 is Sunday and 1 is Monday."
        },
        {
          "name": "locale",
          "type": "string",
          "default": "undefined",
          "description": "Language of the month and weekday names, and of the shown value. Defaults to the browser's own."
        },
        {
          "name": "format",
          "type": "(date: Date) => string",
          "default": "medium date of the locale",
          "description": "Turns the chosen date into the text shown in the field."
        },
        {
          "name": "editable",
          "type": "boolean",
          "default": "false",
          "description": "Lets the date be typed into the field, in the ISO form \"YYYY-MM-DD\"."
        },
        {
          "name": "inline",
          "type": "boolean",
          "default": "false",
          "description": "Shows the calendar in the page instead of in a popup."
        },
        {
          "name": "clearable",
          "type": "boolean",
          "default": "true",
          "description": "Shows the clear button in the field and in the calendar footer."
        },
        {
          "name": "showToday",
          "type": "boolean",
          "default": "true",
          "description": "Shows the today button in the calendar footer."
        },
        {
          "name": "todayText",
          "type": "string",
          "default": "\"Today\"",
          "description": "Text of the today button."
        },
        {
          "name": "clearText",
          "type": "string",
          "default": "\"Clear\"",
          "description": "Text of the clear button in the footer."
        },
        {
          "name": "openLabel",
          "type": "string",
          "default": "\"Choose date\"",
          "description": "Accessible name of the calendar button and of the calendar itself."
        },
        {
          "name": "placeholder",
          "type": "string",
          "default": "\"\"",
          "description": "Placeholder of the field while no date is picked."
        },
        {
          "name": "onchange",
          "type": "(value: string) => void",
          "default": "undefined",
          "description": "Runs with the new value every time the date changes."
        },
        {
          "name": "name",
          "type": "string",
          "default": "undefined",
          "description": "Name of the field, so the ISO value is submitted with the form."
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
          "name": "panelClass",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the calendar panel."
        },
        {
          "name": "dayClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for every day in the grid."
        },
        {
          "name": "selectedDayClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes added to the chosen day."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes passed to the field, merged with the default classes."
        },
        {
          "name": "disabled",
          "description": "Switches the field off, so the calendar cannot be opened."
        },
        {
          "name": "readonly",
          "description": "Shows the date without letting anyone change it."
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
