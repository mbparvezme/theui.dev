<SEO title="Tabs and Pills" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/tabs.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "variant",
          "type": "'tabs' | 'pills'",
          "default": "\"pills\"",
          "description": "Defines the visual style of the tabs. By default, the variant is set to 'pills'."
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "default": "\"normal\"",
          "description": "Defines the speed of tab transitions. The default value is 'normal'. Set it to 'none' to show the panels without the fade effect."
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
          "default": "\"\"",
          "description": "Custom classes for the tab list container."
        },
        {
          "name": "tabClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for each tab element."
        },
        {
          "name": "tabActiveClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes applied to the active tab."
        },
        {
          "name": "tabPanelClasses",
          "type": "string",
          "default": "\"\"",
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
      "key": "tab-props",
      "title": "Tab props",
      "data": [
        {
          "name": "value",
          "type": "string",
          "default": "&lt;REQUIRED&gt;",
          "description": "Links the tab to the <code>TabPanel</code> with the same value. Each value is used once per <code>Tabs</code>."
        },
        {
          "name": "children",
          "type": "Snippet",
          "default": "&lt;REQUIRED&gt;",
          "description": "The label of the tab."
        },
        {
          "name": "class",
          "type": "string",
          "default": "null",
          "description": "Classes for this tab only, merged with <code>tabClasses</code> of the <code>Tabs</code>. Any other attribute is passed to the tab element."
        }
      ]
    },
    {
      "key": "tabpanel-props",
      "title": "TabPanel props",
      "data": [
        {
          "name": "value",
          "type": "string",
          "default": "&lt;REQUIRED&gt;",
          "description": "Links the panel to the <code>Tab</code> with the same value."
        },
        {
          "name": "children",
          "type": "Snippet",
          "default": "&lt;REQUIRED&gt;",
          "description": "The content of the panel."
        },
        {
          "name": "class",
          "type": "string",
          "default": "null",
          "description": "Classes for this panel only, merged with <code>tabPanelClasses</code> of the <code>Tabs</code>. Any other attribute is passed to the panel element."
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
          "name": "children",
          "description": "The list of tab panels. Each <code>TabPanel</code> is linked to the <code>Tab</code> with the same <code>value</code>."
        }
      ]
    }
  ]
</script>
