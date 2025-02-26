<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/notification.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Notification" />

<Page component={data.component} edit_url={data.editURL} />