<SEO title="Stepper" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/stepper.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "number",
          "default": "0",
          "description": "The number in the field. Bindable with <code>bind:value</code>."
        },
        {
          "name": "min",
          "type": "number",
          "default": "-Infinity",
          "description": "Lowest value. The minus button turns off when it is reached."
        },
        {
          "name": "max",
          "type": "number",
          "default": "Infinity",
          "description": "Highest value. The plus button turns off when it is reached."
        },
        {
          "name": "step",
          "type": "number",
          "default": "1",
          "description": "How far the value moves at a time. Fractions such as 0.5 stay exact."
        },
        {
          "name": "decreaseLabel",
          "type": "string",
          "default": "\"Decrease\"",
          "description": "Accessible name of the minus button."
        },
        {
          "name": "increaseLabel",
          "type": "string",
          "default": "\"Increase\"",
          "description": "Accessible name of the plus button."
        },
        {
          "name": "onchange",
          "type": "(value: number) => void",
          "default": "undefined",
          "description": "Runs with the new number every time it changes."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Size of the field and the buttons. Inherited from Form or Fieldset."
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
          "description": "Defines the border radius of the field and the buttons."
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
          "name": "buttonClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the minus and plus buttons."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the number field, merged with the default classes."
        },
        {
          "name": "disabled",
          "description": "Switches the field and both buttons off."
        },
        {
          "name": "readonly",
          "description": "Shows the value without letting anyone change it."
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
