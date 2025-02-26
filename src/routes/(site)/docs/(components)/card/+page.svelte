<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/card.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Card" />

<Page component={data.component} edit_url={data.editURL} />