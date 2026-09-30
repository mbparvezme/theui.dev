<SEO title="Introduction" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {components} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/introduction.svx"
  import { components } from "$lib/components"
</script>
