<script lang="ts">
  import {randomString} from "$lib";
  import { Button, Svg, notify } from "theui-svelte";
  export let title: string|undefined = "Svelte";
  export let copyBtn: boolean = true;
  export let space: 'both' | 'top' | 'bottom' | 'none' = 'both'
  let id: string = randomString("code");
  $: copied = false;

  const copy = () => navigator.clipboard.writeText((document?.getElementById(id) as HTMLElement).innerText)
  .then(() => {
    copied = true
    setTimeout(()=>{copied = false}, 3000)
    // notify("Code copied to clipboard!", "success")
  })
  .catch(err => console.error("Error copying text:", err));
</script>

<div class="relative" class:my-6={space=="both"} class:mt-6={space=="top"} class:mb-6={space=="bottom"}>
  <div {id}>
    <slot />
  </div>
  <div class="bg-gray-100/20 px-4 h-8 absolute top-0 w-full flex items-center justify-between rounded-t-md">
    {#if title}<span class="not-prose text-gray-100 text-xs font-semibold mr-auto">{@html title}</span>{/if}
    <div class="ml-auto">
      {#if copyBtn}
      <button class="font-medium w-[12px] h-[12px] text-gray-400" data-tooltip="Copy code" on:click={()=>copy()}>
        <Svg slot="label" size={.75}>
          <path class:fill-gray-300={!copied} class:fill-green-300={copied} class:hidden={!copied} fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path class:fill-gray-300={!copied} class:fill-green-300={copied} d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path class:fill-gray-300={!copied} class:fill-green-300={copied} d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </Svg>
      </button>
      {/if}
    </div>
  </div>
</div>