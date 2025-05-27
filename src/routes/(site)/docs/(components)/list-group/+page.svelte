<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/list-group.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="List Group" />

<Page component={data.component} />