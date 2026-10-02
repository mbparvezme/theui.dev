<SEO title="Spinner" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/spinner.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "variant",
          "type": "<a href=\"/docs/types#spinner-variant-type\">SPINNER_VARIANT</a>",
          "default": "\"ring\"",
          "description": "Shape of the spinner: \"ring\", \"dots\" or \"ping\"."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#spinner-size-type\">SPINNER_SIZE</a>",
          "default": "\"md\"",
          "description": "Size of the spinner: \"xs\", \"sm\", \"md\", \"lg\" or \"xl\"."
        },
        {
          "name": "label",
          "type": "string",
          "default": "\"Loading\"",
          "description": "Text read by screen readers. It is not used when you pass visible text as the child."
        },
        {
          "name": "spinnerClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for the moving shape, such as its border width."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the wrapper, merged with the default classes. The spinner is drawn in the current text colour, so a text colour class recolours it."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "Visible text shown next to the spinner, such as \"Loading your data\"."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": null
    }
  ]
</script>
