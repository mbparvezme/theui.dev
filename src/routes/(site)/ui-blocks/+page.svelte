<script lang="ts">
  import type { PageData } from "../$types"
  import { Button, Card, Container } from 'theui-svelte'
  import PageHead from "$lib/ui/PageHeader.svelte"
  import SEO from "$lib/SEO.svelte"
  import ComingSoon from "$lib/ui/ComingSoon.svelte"
  let { data }: {data: PageData } = $props()
</script>

<SEO title="UI Blocks" />

<ComingSoon title="Exciting UI blocks" />

<!-- <PageHead h1 = "Supercharge Your UI Workflow <br class='sm:hidden md:block'>with Ready UI Blocks" h2="Build beautiful apps in minutes, not hours." classes="text-start items-start">
  {#snippet afterCTA()}
    <p class="w-1/2">Drop-in UI blocks built specifically for Svelte and Tailwind — fast to implement, cleanly designed, and fully reusable. Skip the hassle of designing from scratch. Simply copy the block you need, paste it into your project, and focus on building great functionality instead of wasting time on layouts.</p>
    <div>
      <Button href="#" rounded="full" size="lg" class="me-4">Get Free Blocks</Button>
      <Button href="#" rounded="full" size="lg" outline>Explore Pricing</Button>
    </div>
  {/snippet}
</PageHead>

<Container>
  <h1 class="text-3xl font-bold text-center mb-8">THEUI UI BLOCKS</h1>
  <section class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
    {#each data.blockCategories as category}
      <Card class="dark:bg-secondary" title={category.title}>
        <a class="absolute inset-0" href={"ui-blocks/"+category.slug} aria-label={category.title + " link"}>&nbsp;</a>
      </Card>
    {/each}
  </section>
</Container> -->