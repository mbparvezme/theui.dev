<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/popup.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Entry-Exit Popup" />

<Page component={data.component} />