<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/table.svx";

  let { data }: { data: PageData|any } = $props();
</script>

<Page component={data.component} edit_url={data.editURL} />