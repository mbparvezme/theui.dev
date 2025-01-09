<script lang="ts">
  import type { PageData } from "../container/$types";
  import Page from "$lib/pages/collapse.svx";

  let { data }: { data: PageData|any } = $props();
</script>

<Page component={data.component} edit_url={data.editURL} />