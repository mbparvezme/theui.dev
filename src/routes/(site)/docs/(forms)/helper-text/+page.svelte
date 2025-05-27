<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/helper-text.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Helper Text" />

<Page component={data.component} />