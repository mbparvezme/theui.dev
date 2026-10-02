<SEO title="Select" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/select.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "options",
          "type": "<a href=\"/docs/types#select-data-type\">SELECT_DATA</a>[]",
          "default": "undefined",
          "description": "Array of options for the select input. If it is set, the content of the component is ignored."
        },
        {
          "name": "value",
          "type": "string",
          "default": "undefined",
          "description": "The selected value. Bindable: use <code>bind:value</code> to read or change the selection."
        },
        {
          "name": "placeholder",
          "type": "string",
          "default": "undefined",
          "description": "Adds a disabled option at the top of the list. No placeholder is shown unless you set it."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "Inherited from Fieldset or Form, or \"bordered\"",
          "description": "Defines the visual style of the select input: \"bordered\" or \"flat\"."
        },
        {
          "name": "label",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Defines the label for the select input. A string label is linked to the input; a Snippet is rendered as you wrote it."
        },
        {
          "name": "floatingLabel",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or true when variant is \"flat\"",
          "description": "Makes the label float above the input. It only applies to a string label."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Controls the size of the select input."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Defines the border radius of the select input. Options: \"none\", \"sm\", \"md\", \"lg\", \"xl\", \"2xl\", \"full\"."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form, or \"normal\"",
          "description": "Controls the speed of the focus and floating label transitions."
        },
        {
          "name": "helperText",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Provides additional information below the select input, linked with <code>aria-describedby</code>. A string renders as plain text; use the snippet for markup."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Fieldset or Form, or \"\"",
          "description": "Applies custom styles to the label."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Applies custom styles to the wrapper element."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "Removes all default styles, applying only user-defined styles."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the select input and dims it."
        },
        {
          "name": "required",
          "description": "Marks the select as required for form validation."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The <code>&lt;option&gt;</code> tags of the select. Used only when the <code>options</code> prop is not set."
        },
        {
          "name": "label",
          "description": "The label of the select, as an alternative to the string prop. A Snippet label never floats."
        },
        {
          "name": "helperText",
          "description": "Helper text shown below the select, as an alternative to the string prop."
        }
      ]
    }
  ]
</script>
