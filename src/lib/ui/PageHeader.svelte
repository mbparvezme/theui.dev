<script lang="ts">
  import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';
  import { Container, Button } from 'theui-svelte'

  interface Props {
    children?: Snippet
    beforeItem?: Snippet
    afterCTA?: Snippet
    h1?: string
    h2?: string
    text?: string
    ctaTxt?: string
    ctaUrl?: string,
    classes?: string,
  }

  let {children, beforeItem, afterCTA, h1, h2, ctaTxt, ctaUrl, classes}: Props = $props()
</script>

<header class="">
  <Container class={twMerge("px-8 md:px-16 flex flex-col items-center gap-y-8 text-center pt-36 md:pt-48 pb-24", classes)}>
    {@render beforeItem?.()}
    {#if h1}<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-display">{@html h1}</h1>{/if}
    {#if h2}<h2 class="text-2xl md:text-4xl xl:text-4xl text-muted font-display">{@html h2}</h2>{/if}
    {#if children}<p class="sm:text-xl lg:w-2/3">{@render children?.()}</p>{/if}
    {#if ctaUrl && ctaTxt}<Button href={ctaUrl} rounded='full' size='lg'>{ctaTxt}</Button>{/if}
    {@render afterCTA?.()}
  </Container>
</header>