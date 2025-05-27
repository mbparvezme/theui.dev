<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/modal.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Modal" />

<Page component={data.component} />