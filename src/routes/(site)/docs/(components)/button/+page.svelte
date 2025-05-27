<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/button.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Button" />

<Page component={data.component} />