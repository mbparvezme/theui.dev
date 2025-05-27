<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/progress-bar.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Progress Bar" />

<Page component={data.component} />