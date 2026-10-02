<SEO title="Combobox" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/combobox.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "items",
          "type": "<a href=\"/docs/types#combobox-item-type\">COMBOBOX_ITEM</a>[]",
          "default": "[]",
          "description": "The options. Strings and numbers, or objects with value, text, disabled and group."
        },
        {
          "name": "value",
          "type": "unknown",
          "default": "undefined",
          "description": "The chosen value, or an array of values when multiple is set. Bindable with <code>bind:value</code>."
        },
        {
          "name": "multiple",
          "type": "boolean",
          "default": "false",
          "description": "Lets several options be chosen. Each one is shown as a chip."
        },
        {
          "name": "searchable",
          "type": "boolean",
          "default": "true",
          "description": "Lets the user type to filter the list."
        },
        {
          "name": "clearable",
          "type": "boolean",
          "default": "true",
          "description": "Shows a button that clears the choice."
        },
        {
          "name": "creatable",
          "type": "boolean",
          "default": "false",
          "description": "Offers to add what was typed when it matches no option."
        },
        {
          "name": "loading",
          "type": "boolean",
          "default": "false",
          "description": "Shows a spinner in the field, for an async search."
        },
        {
          "name": "placeholder",
          "type": "string",
          "default": "\"\"",
          "description": "Text shown while nothing is chosen."
        },
        {
          "name": "emptyText",
          "type": "string",
          "default": "\"No results\"",
          "description": "Text shown when no option matches."
        },
        {
          "name": "createText",
          "type": "(query: string) => string",
          "default": '(q) => `Create "${q}"`',
          "description": "Text of the entry that adds a new option."
        },
        {
          "name": "filter",
          "type": "(option: <a href=\"/docs/types#combobox-option-type\">COMBOBOX_OPTION</a>, query: string) => boolean",
          "default": "text contains the query",
          "description": "Decides which options match what was typed."
        },
        {
          "name": "onsearch",
          "type": "(query: string) => void",
          "default": "undefined",
          "description": "Runs with what was typed. When it is set, the component stops filtering and shows the items you pass."
        },
        {
          "name": "onchange",
          "type": "(value: unknown) => void",
          "default": "undefined",
          "description": "Runs with the new value every time the choice changes."
        },
        {
          "name": "name",
          "type": "string",
          "default": "undefined",
          "description": "Name of the field. A multiple combobox submits one field for each chosen value."
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
          "description": "Defines the border radius of the field and the chips."
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
          "name": "fieldClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the box that holds the chips and the input."
        },
        {
          "name": "panelClass",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the list panel."
        },
        {
          "name": "optionClass",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for every option row."
        },
        {
          "name": "chipClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the chips of a multiple combobox."
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
          "description": "Switches the field off."
        },
        {
          "name": "readonly",
          "description": "Shows the choice without letting anyone change it."
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
          "name": "option",
          "description": "Draws one row of the list. It is handed the option, with its value, text, disabled state and group."
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
