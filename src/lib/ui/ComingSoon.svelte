<script lang="ts">
  import { twMerge } from "tailwind-merge"
  let { title, ...props }: {title?: string, [key: string]: unknown} = $props()
</script>

<section class={twMerge("h-screen flex flex-col gap-4 justify-center items-center", props?.class as string)}>
  {#if title}<h1 class="text-xl md:text-3xl text-muted text-center">{@html title}</h1>{/if}
  <h3 class="text-2xl md:text-6xl font-display">Coming Soon</h3>
</section>