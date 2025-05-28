<SEO title="Collapse" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/collapse.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "trigger",
          "type": "Snippet",
          "description": "The header or trigger content for the collapse.",
          "default": "undefined"
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Controls the speed of the collapse animation.",
          "default": "fast"
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "description": "Accessible label for the collapse component.",
          "default": ""
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Defines if the collapse is open by default.",
          "default": false
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "trigger",
          "description": "The trigger content for the collapse."
        }
      ]
    }
  ]
</script>
