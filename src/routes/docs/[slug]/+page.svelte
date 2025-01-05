<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount, type Component } from "svelte";

  let { data }: { data: PageData|any } = $props();

  let Page: ConstructorOfATypedSvelteComponent | Component<any, any, any> | undefined = $state(undefined);

  onMount(async () => {
    console.log(data.slug)
    const module = await import(`$lib/pages/${data.slug}.svx`);
    Page = module.default;
  });

</script>

<!-- <svelte:component this={PageComponent} component={data.component} edit_url={data.editURL} /> -->

{#if Page}
  <Page component={data.component} edit_url={data.editURL} />
{/if}