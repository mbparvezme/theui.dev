<SEO title="Label" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/label.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "label",
          "type": "string | Snippet",
          "default": "undefined",
          "description": "The label prop defines the content of the label as plain string, HTML string or Svelte Snippet."
        },
        {
          "name": "id",
          "type": "string",
          "default": "null",
          "description": "The ID of the label that bind it with the input."
        }
      ]
    } 
  ]
</script>
