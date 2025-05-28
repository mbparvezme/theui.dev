<SEO title="Close Button" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/close.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "size",
          "type": "number",
          "default": "1.5",
          "description": "Controls the size of the default close icon within the button."
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "default": "Close button",
          "description": "Provides an accessible label for the close button, improving accessibility for screen readers."
        }
      ]
    },
    {
      "key": "dynamicProps", 
      "title": "Dynamic props",
      "data": [
        {
          "name": "disabled",
          "description": "Disables the close button."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": [
        {
          "name": "onclick",
          "description": "Triggers when the close button clicked."
        }
      ]
    }
  ]
</script>
