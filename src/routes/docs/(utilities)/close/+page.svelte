<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/close.svx";

  let { data }: { data: PageData|any } = $props();
</script>

<!-- <div class="bg-green-300 text-green-700 p-5"></div> -->

<Page component={data.component} edit_url={data.editURL} />