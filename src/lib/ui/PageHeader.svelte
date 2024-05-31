<script lang="ts">
  import { Container, Button } from 'theui-svelte'

  export let h1:string|undefined      = undefined
  export let h2:string|undefined      = undefined
  export let text:string|undefined    = undefined
  export let ctaTxt:string|undefined  = undefined
  export let ctaUrl:string|undefined  = undefined
</script>

<header class="min-h-screen">
  <Container class="px-8 md:px-16 flex flex-col items-center gap-y-8 text-center pt-36 md:pt-48 pb-24">
    <slot name="beforeItem" />
    {#if h1}<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold">{@html h1}</h1>{/if}
    {#if h2}<h2 class="text-2xl md:text-4xl xl:text-5xl font-bold">{@html h2}</h2>{/if}
    {#if text}<p class="sm:text-xl lg:w-2/3">{@html text}</p>{/if}
    <slot name="beforeCTA" />
    {#if ctaUrl && ctaTxt}<Button href={ctaUrl} label={ctaTxt} config={{rounded: 'full', size: 'lg'}} />{/if}
    <slot name="afterCTA" />
  </Container>
</header>