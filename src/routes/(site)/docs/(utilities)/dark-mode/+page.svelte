<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/dark-mode.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Dark-mode" />

<Page component={data.component} edit_url={data.editURL} />