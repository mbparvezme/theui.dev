<SEO title="Fieldset" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/fieldset.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "title",
          "type": "string",
          "default": "undefined",
          "description": "Legend or title of the fieldset for the assertive technology. Only visible to the screen readers. No legend is rendered when it is not set."
        },
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#input-variant-type\">INPUT_VARIANT</a>",
          "default": "Inherited from Form or \"bordered\"",
          "description": "Defines the visual style of the inputs."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#input-size-type\">INPUT_SIZE</a>",
          "default": "Inherited from Form or \"md\"",
          "description": "Defines the size of the inputs: \"sm\", \"md\", \"lg\" or \"xl\"."
        },
        {
          "name": "floatingLabel",
          "type": "boolean",
          "default": "true if the Fieldset sets its own \"flat\" variant; otherwise inherited from Form, or true if variant is \"flat\"",
          "description": "Enables or disables floating labels for inputs. If variant is set to \"flat\", this defaults to true and false otherwise."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "Inherited from Form or \"normal\"",
          "description": "Controls the animation speed for inputs."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "Inherited from Form or \"md\"",
          "description": "Controls the border radius of inputs."
        },
        {
          "name": "labelClasses",
          "type": "string",
          "default": "Inherited from Form or \"\"",
          "description": "Allows custom CSS classes to be applied to input labels for additional styling."
        },
        {
          "name": "reset",
          "type": "boolean",
          "default": "Inherited from Form or false",
          "description": "Resets all the defaults styles and apply only the custom styles."
        }
      ]
    }
  ]
</script>