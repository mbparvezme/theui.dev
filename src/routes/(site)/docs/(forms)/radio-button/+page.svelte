<SEO title="Radio Button" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/radio.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "unknown",
          "default": "undefined",
          "description": "The option this radio button stands for. It is sent with the form when the radio button is selected."
        },
        {
          "name": "group",
          "type": "unknown",
          "default": "undefined",
          "description": "The selected value of the radio button group. Bindable: use <code>bind:group</code> on every radio button of the group to read or set the selection."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\"",
          "description": "Controls the size of the radio button. Available options: \"sm\", \"md\", \"lg\", \"xl\"."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form, or \"normal\"",
          "description": "Determines the animation speed for state changes. Options: \"none\", \"slower\", \"slow\", \"normal\", \"fast\", \"faster\"."
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
          "description": "Additional classes for styling the main wrapper of the radio button."
        },
        {
          "name": "labelPosition",
          "type": "'start' | 'end'",
          "default": "\"end\"",
          "description": "Places the label before (\"start\") or after (\"end\") the radio button, following the writing direction."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the radio button and dims it together with its label."
        },
        {
          "name": "readonly",
          "description": "Prevents changes and dims the radio button together with its label."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The label content of the radio button."
        }
      ]
    }
  ]
</script>
