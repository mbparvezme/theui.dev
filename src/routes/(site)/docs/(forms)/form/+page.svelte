<SEO title="Form" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/form.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "method",
          "type": "'GET' | 'POST'",
          "default": "\"POST\"",
          "description": "Defines the form submit method."
        },
        {
          "name": "enhance",
          "type": "Action&lt;HTMLFormElement&gt;",
          "default": "undefined",
          "description": "A Svelte action applied to the form element, like SvelteKit's <code>enhance</code> from <code>$app/forms</code>."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "\"bordered\"",
          "description": "Defines the visual style of the inputs."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "\"md\"",
          "description": "Defines the size of the inputs: \"sm\", \"md\", \"lg\" or \"xl\"."
        },
        {
          "name": "floatingLabel",
          "type": "boolean",
          "default": "true (if variant == \"flat\")",
          "description": "Enables or disables floating labels for inputs. If variant is set to \"flat\", this defaults to true and false otherwise."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Controls the animation speed for inputs."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Controls the border radius of inputs."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "undefined",
          "description": "Allows custom CSS classes to be applied to input labels for additional styling."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "false",
          "description": "Resets all the defaults styles and apply only the custom styles."
        }
      ]
    }
  ]
</script>
