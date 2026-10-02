<SEO title="OTP Input" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/otp-input.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "string",
          "default": "\"\"",
          "description": "The code as one string. Bindable with <code>bind:value</code>."
        },
        {
          "name": "length",
          "type": "number",
          "default": "6",
          "description": "Number of boxes."
        },
        {
          "name": "type",
          "type": "<a href=\"/docs/types#otp-type\">OTP_TYPE</a>",
          "default": "\"number\"",
          "description": "What may be typed: \"number\" for digits, \"text\" for letters and digits, or \"password\" to hide the characters."
        },
        {
          "name": "separatorAfter",
          "type": "number",
          "default": "undefined",
          "description": "Draws a separator after this many boxes, to group a long code."
        },
        {
          "name": "autofocus",
          "type": "boolean",
          "default": "false",
          "description": "Puts the cursor in the first box when the page loads."
        },
        {
          "name": "placeholder",
          "type": "string",
          "default": "\"\"",
          "description": "Character shown in an empty box."
        },
        {
          "name": "oncomplete",
          "type": "(value: string) => void",
          "default": "undefined",
          "description": "Runs with the full code as soon as the last box is filled."
        },
        {
          "name": "boxLabel",
          "type": "(index: number, length: number) => string",
          "default": "(i, n) => `Character ${i + 1} of ${n}`",
          "description": "Builds the accessible name of each box."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Size of the boxes. Inherited from Form or Fieldset."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "\"bordered\"",
          "description": "Style of the boxes: \"bordered\" or \"flat\". Inherited from Form or Fieldset."
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
          "description": "Defines the border radius of the boxes."
        },
        {
          "name": "name",
          "type": "string",
          "default": "undefined",
          "description": "Name of the field. The whole code is submitted as one value."
        },
        {
          "name": "helperText",
          "type": "string | Snippet",
          "default": "undefined",
          "description": "Text under the field, linked to the boxes for screen readers."
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
          "name": "boxClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for every box."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes passed to every box, merged with the default classes."
        },
        {
          "name": "disabled",
          "description": "Switches every box off."
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
