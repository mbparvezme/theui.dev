<SEO title="Accordion" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/accordion.svx"
  const component = {
    "accordion" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "size",
            "type": "<a href=\"/docs/types#accordion-size\">ACCORDION_SIZE</a>",
            "default": "\"default\"",
            "description": "Sets the size of all the accordion items."
          },
          {
            "name": "standalone",
            "type": "boolean",
            "default": "true",
            "description": "When true, only one AccordionItem stays open at a time; when false, multiple items can be open simultaneously."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#common-types\">ANIMATE_SPEED</a>",
            "default": "\"fast\"",
            "description": "Specifies the speed of the opening and closing animation of the accordion items."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#common-types\">ROUNDED</a>",
            "default": "\"md\"",
            "description": "Determines the border radius of the accordion items."
          },
          {
            "name": "containerClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the main container of the accordion items."
          },
          {
            "name": "openContainerClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the active (expanded) state of the accordion's container of the accordion items."
          },
          {
            "name": "titleClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the title of the accordion items."
          },
          {
            "name": "openTitleClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the title when the accordion item is active (expanded). Applied to all the Accordion items."
          },
          {
            "name": "contentClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the content section for all the accordion items."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "flush",
            "description": "If added, applies the flush style to all Accordion items, giving the accordion a minimalist, sleek appearance by removing the borders for a seamless look."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": null
      },
      {
        "key": "functions",
        "title": "Functions",
        "data": null
      }
    ],
    "item": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "title",
            "type": "string | Snippet",
            "default": "undefined",
            "description": "Sets the title of the accordion item."
          },
          {
            "name": "size",
            "type": "<a href=\"/docs/types#accordion-size\">ACCORDION_SIZE</a>",
            "default": "\"default\"",
            "description": "Sets the size of the accordion item."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "default": "\"fast\"",
            "description": "Specifies the speed of the opening and closing animation."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "\"md\"",
            "description": "Determines the border radius of the accordion item."
          },
          {
            "name": "containerClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the accordion's main container."
          },
          {
            "name": "openContainerClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the active (expanded) state of the accordion's container."
          },
          {
            "name": "titleClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the title of the accordion item."
          },
          {
            "name": "openTitleClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the title when the accordion item is active (expanded)."
          },
          {
            "name": "contentClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the content section of the accordion."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "flush",
            "description": "A minimalist variant of the Accordion component, designed for a sleek and simple appearance"
          },
          {
            "name": "open",
            "description": "Custom classes for the title when the accordion item is active (expanded)."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "title",
            "description": "Snippet for custom content/elements in the title of the accordion item."
          }
        ]
      },
      {
        "key": "functions",
        "title": "Functions",
        "data": null
      }
    ]
  }
</script>