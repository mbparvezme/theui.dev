<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/rtl.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Right to Left (rtl) support" />

<Page edit_url={data.editURL} />