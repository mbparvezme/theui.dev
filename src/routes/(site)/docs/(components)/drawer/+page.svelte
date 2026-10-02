<SEO title="Drawer" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/drawer.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "label",
          "type": "string | Snippet",
          "description": "The label or trigger content for the Drawer component. A string renders as plain text; use a Snippet for markup.",
          "default": "undefined"
        },
        {
          "name": "position",
          "type": "'top' | 'end' | 'bottom' | 'start'",
          "description": "Drawer position relative to screen.",
          "default": "\"start\""
        },
        {
          "name": "open",
          "type": "boolean",
          "description": "Controls the visibility of the Drawer. Bindable: use bind:open to programmatically open or close the Drawer.",
          "default": "false"
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Speed of the animation when the component is shown or hidden.",
          "default": "\"fast\""
        },
        {
          "name": "backdrop",
          "type": "boolean | string",
          "description": "Toggle or style the Drawer backdrop.",
          "default": true
        },
        {
          "name": "staticBackdrop",
          "type": "boolean",
          "description": "Prevent Drawer from closing on backdrop click.",
          "default": false
        },
        {
          "name": "buttonClasses",
          "type": "string",
          "description": "Classes for the drawer trigger button.",
          "default": ""
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "description": "Accessible name used when the trigger is a snippet (set on the trigger), or when there is no <code>label</code> (set on the Drawer panel). A string <code>label</code> uses its own text as the name.",
          "default": "\"Drawer\""
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "fullscreen",
          "description": "Use the fullscreen prop to make the Drawer component take up the entire screen."
        },
        {
          "name": "class",
          "description": "Any CSS classes used in the class prop will be applied to the Drawer body directly. It will override the default classes."
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
          "description": "The element that triggers the opening of the component."
        }
      ]
    }
  ]
</script>
