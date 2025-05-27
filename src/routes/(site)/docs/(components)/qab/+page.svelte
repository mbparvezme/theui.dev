<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/qab.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Quick Action Button - QAB" />

<Page component={data.component} />