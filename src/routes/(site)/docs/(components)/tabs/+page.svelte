<SEO title="Tabs and Pills" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/tabs.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "variant",
          "type": "'tabs' | 'pills'",
          "default": "'pills'",
          "description": "Defines the visual style of the tabs. By default, the variant is set to 'pills'."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "'normal'",
          "description": "Defines the speed of tab transitions. The default value is 'normal'."
        },
        {
          "name": "border",
          "type": "boolean | string",
          "default": "true",
          "description": "Controls whether the border styling is applied to the tabs. Can be a boolean or a custom string for classes."
        },
        {
          "name": "tabContainerClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for the tab list container."
        },
        {
          "name": "tabClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for each tab element."
        },
        {
          "name": "tabActiveClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes applied to the active tab."
        },
        {
          "name": "tabPanelClasses",
          "type": "string",
          "default": "null",
          "description": "Custom classes for each tab panel."
        },
        {
          "name": "id",
          "type": "string",
          "default": "&lt;RANDOM STRING&gt;",
          "description": "An optional unique identifier for the Tabs component."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "tabs",
          "description": "The list of tab elements to be displayed inside the Tabs component."
        },
        {
          "name": "panels",
          "description": "The list of tab panels corresponding to each tab."
        }
      ]
    }
  ]
</script>
