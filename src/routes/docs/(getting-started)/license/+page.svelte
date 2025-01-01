<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/license.svx";

  let { data }: { data: PageData|any } = $props();
</script>

<Page edit_url={data.editURL} />