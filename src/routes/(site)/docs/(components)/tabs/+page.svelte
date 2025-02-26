<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/tabs.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Tabs and Pills" />

<Page component={data.component} edit_url={data.editURL} />