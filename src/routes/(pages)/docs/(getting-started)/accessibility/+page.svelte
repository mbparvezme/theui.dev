<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/accessibility.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Accessibility Guide" />

<Page edit_url={data.editURL} />