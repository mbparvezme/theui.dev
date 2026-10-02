<SEO title="File Dropzone" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/file-dropzone.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "files",
          "type": "FileList",
          "default": "undefined",
          "description": "The chosen files. Bindable with <code>bind:files</code>."
        },
        {
          "name": "multiple",
          "type": "boolean",
          "default": "false",
          "description": "Accepts more than one file. New files are added to the ones already chosen."
        },
        {
          "name": "accept",
          "type": "string",
          "default": "undefined",
          "description": "Allowed file types, such as \".pdf,.docx\" or \"image/*\". Anything else is rejected with the reason \"type\"."
        },
        {
          "name": "maxSize",
          "type": "number",
          "default": "undefined",
          "description": "Largest size of one file, in bytes. A bigger file is rejected with the reason \"size\"."
        },
        {
          "name": "maxFiles",
          "type": "number",
          "default": "undefined",
          "description": "How many files may be kept. Files over the limit are rejected with the reason \"count\"."
        },
        {
          "name": "preview",
          "type": "boolean",
          "default": "true",
          "description": "Shows a thumbnail of every image in the list."
        },
        {
          "name": "showList",
          "type": "boolean",
          "default": "true",
          "description": "Shows the list of chosen files with their size and a remove button."
        },
        {
          "name": "text",
          "type": "string",
          "default": "\"Drop files here or click to browse\"",
          "description": "Main line inside the box."
        },
        {
          "name": "hint",
          "type": "string",
          "default": "undefined",
          "description": "Smaller line under the main text, for the rules such as allowed types and size."
        },
        {
          "name": "onselect",
          "type": "(files: File[]) => void",
          "default": "undefined",
          "description": "Runs with the files that were accepted."
        },
        {
          "name": "onreject",
          "type": "(rejections: <a href=\"/docs/types#dropzone-rejection-type\">DROPZONE_REJECTION</a>[]) => void",
          "default": "undefined",
          "description": "Runs with the files that were turned away, each with its reason: \"type\", \"size\" or \"count\"."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Sets the size of the component."
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
          "description": "Defines the border radius of the box and the list rows."
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
          "name": "dropzoneClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the drop box."
        },
        {
          "name": "listClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the list of chosen files."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes passed to the file input."
        },
        {
          "name": "disabled",
          "description": "Turns the dropzone off, for dropping and for clicking."
        },
        {
          "name": "name",
          "description": "Name of the field, so the files are submitted with the form."
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
        },
        {
          "name": "content",
          "description": "Replaces the icon and text inside the drop box."
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
