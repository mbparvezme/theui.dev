<SEO title="Checkbox" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/checkbox.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "unknown",
          "default": "undefined",
          "description": "Defines the value sent with the form when the checkbox is checked."
        },
        {
          "name": "checked",
          "type": "boolean",
          "default": "false",
          "description": "Whether the checkbox is checked. Bindable: use <code>bind:checked</code> to read or control the state."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Controls the size of the checkbox. Available options: \"sm\", \"md\", \"lg\", \"xl\"."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form, or \"normal\"",
          "description": "Determines the animation speed for state changes. Options: \"none\", \"slower\", \"slow\", \"normal\", \"fast\", \"faster\"."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "Inherited from Fieldset or Form, or \"sm\"",
          "description": "Defines the border-radius of the checkbox. Options: \"none\", \"sm\", \"md\", \"lg\", \"xl\", \"2xl\", \"full\"."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "If set to true, removes all default styles, allowing full customization."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Fieldset or Form, or \"\"",
          "description": "Custom classes for styling the label."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Additional classes for styling the main wrapper of the checkbox."
        },
        {
          "name": "labelPosition",
          "type": "'start' | 'end'",
          "default": "\"end\"",
          "description": "Places the label before (\"start\") or after (\"end\") the checkbox, following the writing direction."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the checkbox and dims it together with its label."
        },
        {
          "name": "readonly",
          "description": "Prevents changes and dims the checkbox together with its label."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The label content of the checkbox."
        }
      ]
    }
  ]
</script>
