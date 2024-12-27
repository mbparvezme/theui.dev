<script lang="ts">
  import type { PageData } from "../../$types";
  import Page from "$lib/pages/introduction.svx";

  let { data }: { data: PageData } = $props();
</script>

<Page components={data.components} />