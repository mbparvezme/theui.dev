<SEO title="File Input" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/file-input.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "files",
          "type": "FileList | undefined",
          "default": "null",
          "description": "Represents the selected file(s) in the input field. Can be used to retrieve uploaded files."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Controls the size of the file input, affecting its padding and overall dimensions."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "\"bordered\"",
          "description": "Defines the visual style of the input field. Options include bordered, underline, and flat."
        },
        {
          "name": "helperText",
          "type": "Snippet | string",
          "default": "undefined",
          "description": "Displays additional information below the file input to guide the user."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border-radius of the checkbox. Options: \"none\", \"sm\", \"md\", \"lg\", \"full\"."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "false",
          "description": "If true, resets all default library styles, allowing for full custom styling."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Applies custom CSS classes to style the label of the file input."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Allows custom styling for the main wrapper container of the file input."
        }
      ]
    }
  ]
</script>
