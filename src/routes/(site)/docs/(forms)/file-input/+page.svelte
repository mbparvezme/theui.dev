<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/file-input.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="File Input" />

<Page component={data.component} />