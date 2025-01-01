<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/z-index.svx";

  let { data }: { data: PageData|any } = $props();
</script>

<Page edit_url={data.editURL} />