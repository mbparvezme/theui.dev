<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/colors.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
  console.log(data.colors)
</script>

<SEO title="Color Configuration" />

<Page edit_url={data.editURL} />