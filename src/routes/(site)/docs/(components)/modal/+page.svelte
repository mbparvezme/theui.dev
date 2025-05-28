<SEO title="Modal" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/modal.svx"
  import SEO from "$lib/SEO.svelte"

  const component =   [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "label",
          "type": "string | Snippet",
          "description": "Content or element that triggers the modal.",
          "default": "undefined"
        },
        {
          "name": "header",
          "type": "Snippet",
          "description": "Content for the modal header.",
          "default": "undefined"
        },
        {
          "name": "footer",
          "type": "Snippet",
          "description": "Content for the modal footer.",
          "default": "undefined"
        },
        {
          "name": "position",
          "type": "'top' | 'center' | 'bottom'",
          "description": "Position of the modal on the screen.",
          "default": "\"center\""
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg' | 'full'",
          "description": "Size of the modal.",
          "default": "\"md\""
        },
        {
          "name": "animation",
          "type": "'slide-down' | 'slide-up' | 'fade' | 'zoom-in' | 'zoom-out'",
          "description": "Type of animation for the modal.",
          "default": "\"fade\""
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Speed of the animation.",
          "default": "\"fast\""
        },
        {
          "name": "backdrop",
          "type": "boolean|string",
          "description": "Controls the modal backdrop. Can be boolean or a string for custom backdrop.",
          "default": "true"
        },
        {
          "name": "staticBackdrop",
          "type": "boolean",
          "description": "Disables closing the modal by clicking on the backdrop.",
          "default": "false"
        },
        {
          "name": "closeButton",
          "type": "boolean",
          "description": "Shows or hides the close button.",
          "default": "true"
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "description": "Border-radius of the modal.",
          "default": "\"md\""
        },
        {
          "name": "open",
          "type": "boolean",
          "description": "Tracks the visibility status of the modal.",
          "default": "false"
        },
        {
          "name": "buttonClasses",
          "type": "string",
          "description": "Classes for the modal trigger button.",
          "default": "undefined"
        },
        {
          "name": "containerClasses",
          "type": "string",
          "description": "Classes for the modal container.",
          "default": "undefined"
        },
        {
          "name": "bodyClasses",
          "type": "string",
          "description": "CSS classes for the modal body.",
          "default": "undefined"
        },
        {
          "name": "headerClasses",
          "type": "string",
          "description": "CSS classes for the modal header.",
          "default": "undefined"
        },
        {
          "name": "footerClasses",
          "type": "string",
          "description": "CSS classes for the modal footer.",
          "default": "undefined"
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "Main content of the component."
        },
        {
          "name": "label",
          "description": "Content or element that triggers the modal."
        },
        {
          "name": "header",
          "description": "Content for the modal header."
        },
        {
          "name": "footer",
          "description": "Content for the modal footer."
        }
      ]
    }
  ]
</script>
