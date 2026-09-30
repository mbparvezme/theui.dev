<SEO title="Toggle" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/toggle.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "type",
          "type": "\"checkbox\" | \"radio\"",
          "default": "\"checkbox\"",
          "description": "Specifies whether the toggle functions as a checkbox or a radio button."
        },
        {
          "name": "value",
          "type": "unknown",
          "default": "undefined",
          "description": "Value of the toggle input. It could be anything, text, numeric or boolean!"
        },
        {
          "name": "checked",
          "type": "boolean",
          "default": "false",
          "description": "The checked state of a checkbox toggle. Bindable with <code>bind:checked</code>."
        },
        {
          "name": "group",
          "type": "unknown",
          "default": "undefined",
          "description": "The selected value of a radio toggle group. Bindable with <code>bind:group</code>."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form component or \"md\"",
          "description": "Defines the size of the toggle."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form component or \"normal\"",
          "description": "Controls the animation speed when toggling."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"full\"",
          "description": "Defines the border-radius of the toggle switch."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false",
          "description": "If set to true, removes all default styles, allowing full customization."
        },
        {
          "name": "wrapperClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom CSS classes applied to the wrapper div."
        },
        {
          "name": "labelPosition",
          "type": "'start' | 'end'",
          "default": "\"end\"",
          "description": "Places the label before (\"start\") or after (\"end\") the toggle, following the writing direction."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Fieldset or Form component or \"\"",
          "description": "Custom CSS classes for styling the label. Inherits from the Fieldset or Form component if available."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the toggle and dims it together with its label."
        },
        {
          "name": "readonly",
          "description": "Prevents changes and dims the toggle together with its label."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The label content of the toggle."
        }
      ]
    }
  ]
</script>
