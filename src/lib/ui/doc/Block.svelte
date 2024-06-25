<script lang="ts">
  import { page } from "$app/stores";
  import { randomString, processID } from "$lib";
  import { Svg } from "theui-svelte";
  export let title  : string|undefined;
  export let id : string = title ? processID(title, false) : randomString();
  
  $: copied = false;
  const copy = () => navigator.clipboard.writeText($page.url.href+"#"+id)
  .then(() => {
    copied = true
    setTimeout(()=>{copied = false}, 3000)
  })
  .catch(err => console.error("Error copying text:", err));
</script>

<section class="docs-block mb-16 flex flex-col gap-4" id={id}>
  {#if title}
    <h2 class="flex items-center justify-between gap-4 my-0 font-bold text-2xl font-body">
      {@html title}
      {#if id}
        <span class="not-prose flex items-center">
          <button class="font-medium w-6 h-6 text-muted flex justify-center items-center" data-tooltip="Copy block URL" data-tooltip-position="left" on:click={()=>copy()}>
            <Svg size={1.5}>
              <path class:fill-green-500={copied} d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
              <path class:fill-green-500={copied} d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </Svg>
          </button>
        </span>
      {/if}
    </h2>
  {/if}
  <slot />
</section>