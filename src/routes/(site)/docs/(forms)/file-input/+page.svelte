<SEO title="File Input" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/file-input.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "files",
          "type": "FileList | undefined",
          "default": "undefined",
          "description": "The selected file(s). Bindable: use <code>bind:files</code> to read what the user picked."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Controls the size of the file input, affecting its padding and overall dimensions."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "Inherited from Fieldset or Form, or \"bordered\"",
          "description": "Defines the visual style of the input field: \"bordered\" or \"flat\"."
        },
        {
          "name": "helperText",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Displays additional information below the file input, linked with <code>aria-describedby</code>. A string renders as plain text; use the snippet for markup."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Defines the border-radius of the input and its file button. Options: \"none\", \"sm\", \"md\", \"lg\", \"xl\", \"2xl\", \"full\"."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "If true, resets all default library styles, allowing for full custom styling."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Fieldset or Form, or \"\"",
          "description": "Applies custom CSS classes to style the label of the file input."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "undefined",
          "description": "Allows custom styling for the main wrapper container of the file input."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the file input, dims it and sets <code>aria-disabled=\"true\"</code>."
        },
        {
          "name": "multiple",
          "description": "Allows selecting more than one file."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The label content of the file input."
        },
        {
          "name": "helperText",
          "description": "Helper text shown below the input, as an alternative to the string prop."
        }
      ]
    }
  ]
</script>
