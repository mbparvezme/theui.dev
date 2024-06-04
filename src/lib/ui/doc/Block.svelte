<script lang="ts">
  import { page } from "$app/stores"
  import { randomString, processID } from "$lib"
  import { notify, Svg } from "theui-svelte"
  export let title  : string|undefined
  export let id     : string = title ? processID(title, false) : randomString()
  
  $: copied = false;
  const copy = () => navigator.clipboard.writeText($page.url.href+"#"+id)
  .then(() => {
    copied = true
    setTimeout(()=>{copied = false}, 3000)
    // notify("Link to this section copied!", "success")
  })
  .catch(err => console.error("Error copying text:", err));
</script>

<section class="docs-block mb-16 flex flex-col gap-4" id={id}>
  {#if title}
    <h2 class="flex items-center justify-between gap-4 my-0 font-bold text-2xl font-body">
      {@html title}
      {#if id}
        <span class="not-prose flex items-center">
          <button class="font-medium w-[12px] h-[12px] text-gray-400" data-tooltip="Copy block URL" data-tooltip-position="left" on:click={()=>copy()}>
            <Svg size={.75}>
              <path class:fill-green-500={copied} class:hidden={!copied} fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path class:fill-green-500={copied} d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path class:fill-green-500={copied} d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </Svg>
          </button>
        </span>
      {/if}
    </h2>
  {/if}
  <slot />
</section>