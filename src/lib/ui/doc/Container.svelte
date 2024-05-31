<script lang="ts">
  export let setupLink: boolean = true
</script>

<section class="grid gap-8" class:lg:grid-cols-5={$$slots.sidebar}>

  <article class="lg:col-span-4 line-numbers">
    <slot />
    <p class="bg-red-500">END MESSAGE</p>
  </article>

  {#if $$slots.sidebar}
  <sidebar class="shrink-0 hidden lg:block overflow-y-auto top-32 lg:sticky" style="height: calc(100vh - 160px)">
    <div class="flex flex-col gap-y-2 text-sm page-section">
      <h4 class="mt-0">ON THIS PAGE</h4>
      {#if setupLink}
      <a href="#setup">Setup</a>
      {/if}
      <slot name="sidebar" />
    </div>
  </sidebar>
  {/if}

</section>

<style lang="postcss">
  :global(.page-section a){
    @apply text-gray-500 no-underline;
  }
</style>
