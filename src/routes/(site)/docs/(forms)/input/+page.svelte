<SEO title="Input" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/input.svx"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "type",
          "description": "Defines the input type.",
          "type": "<a href=\"/docs/types#input-type-type\">INPUT_TYPE</a>",
          "default": "\"text\""
        },
        {
          "name": "value",
          "description": "Sets the value of the input. Bindable: use <code>bind:value</code> to read or update it.",
          "type": "string",
          "default": "undefined"
        },
        {
          "name": "helperText",
          "description": "Displays additional information below the input, linked with <code>aria-describedby</code>. A string renders as plain text; use the snippet for markup.",
          "type": "Snippet | string",
          "default": "undefined"
        },
        {
          "name": "variant",
          "description": "Controls the input's visual style. Available options: \"bordered\", \"flat\".",
          "type": "\"bordered\" | \"flat\"",
          "default": "Inherited from Fieldset or Form, or \"bordered\""
        },
        {
          "name": "floatingLabel",
          "description": "Enables a floating label effect. Automatically enabled for the \"flat\" variant unless explicitly disabled.",
          "type": "boolean",
          "default": "true if the Input sets its own \"flat\" variant; otherwise inherited from Fieldset or Form, or true if variant is \"flat\""
        },
        {
          "name": "size",
          "description": "Defines the input size. Available options: \"sm\", \"md\", \"lg\", \"xl\".",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Fieldset or Form, or \"md\""
        },
        {
          "name": "rounded",
          "description": "Controls the border-radius of the input. Available options: \"sm\", \"md\", \"lg\", \"xl\", \"2xl\", \"full\", \"none\". Not applied to the \"flat\" variant.",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "Inherited from Fieldset or Form, or \"md\""
        },
        {
          "name": "animationSpeed",
          "description": "Defines the animation speed for transitions. Available options: \"none\", \"slower\", \"slow\", \"normal\", \"fast\", \"faster\".",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Fieldset or Form, or \"normal\""
        },
        {
          "name": "labelClasses",
          "description": "Applies custom styles to the label.",
          "type": "string",
          "default": "Inherited from Fieldset or Form, or \"\""
        },
        {
          "name": "wrapperClasses",
          "description": "Applies custom styles to the input wrapper.",
          "type": "string",
          "default": "\"\""
        },
        {
          "name": "reset",
          "description": "Resets all default styles and applies only custom styles.",
          "type": "boolean",
          "default": "Inherited from Fieldset or Form, or false"
        }
      ]
    }
  ]
</script>
