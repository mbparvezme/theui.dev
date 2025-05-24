<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/colors.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Color Configuration" />

<Page colors={data.colors} edit_url={data.editURL} />