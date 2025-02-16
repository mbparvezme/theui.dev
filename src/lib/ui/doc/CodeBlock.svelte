<script lang="ts">
  import type { Snippet } from "svelte";
  import {randomString} from "$lib";
  import { Svg } from "theui-svelte";
  import { twMerge } from "tailwind-merge";

  interface Props {children?: Snippet, title?: string, copyBtn?: boolean, space?: 'both' | 'top' | 'bottom' | 'none', classes?: string};
  let {children, title = "Svelte", copyBtn = true, space = 'none', classes = ""}: Props = $props();

  let id: string = randomString("code");
  let copied = $state(false);

  const copy = $derived(() => navigator.clipboard.writeText((document?.getElementById(id+"-code") as HTMLElement).innerText).then(() => {
    copied = true
    setTimeout(()=>{copied = false}, 3000)
  })
  .catch(err => console.error("Error copying text:", err)));
</script>

<div {id} class="relative {twMerge("border border-gray-200 dark:border-gray-800 rounded-md", classes)}" class:my-6={space=="both"} class:mt-6={space=="top"} class:mb-6={space=="bottom"}>
  <div class="bg-slate-100 dark:bg-slate-900 px-4 h-10 w-full flex items-center justify-between rounded-t-md">
    {#if title}<span class="not-prose text-gray-500 dark:text-gray-400 text-sm mr-auto font-mono">{@html title}</span>{/if}
    <div class="ml-auto">
      {#if copyBtn}
      <button class="relative font-medium w-[12px] h-[12px]" data-tooltip="Copy code" data-tooltip-position="left" onclick={()=>copy()}>
        <Svg slot="label">
          <path class:dark:text-gray-100={!copied} class:fill-green-600={copied} class:hidden={!copied} fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path class:dark:text-gray-100={!copied} class:fill-green-600={copied} d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path class:dark:text-gray-100={!copied} class:fill-green-600={copied} d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </Svg>
      </button>
      {/if}
    </div>
  </div>

  <div id="{id}-code">
  {@render children?.()}
  </div>
</div>