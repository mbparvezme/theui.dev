<SEO title="Label" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/label.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "for",
          "type": "string",
          "default": "undefined",
          "description": "The <code>id</code> of the input the label belongs to. It is a native attribute passed to the &lt;label&gt; element."
        },
        {
          "name": "class",
          "type": "string",
          "default": "undefined",
          "description": "Custom classes merged with the default label styles."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "children",
          "description": "The content of the label. It is required; a Label without content renders nothing."
        }
      ]
    }
  ]
</script>
