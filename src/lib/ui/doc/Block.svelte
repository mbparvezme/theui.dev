<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from '$app/state';
  import { randomString, processID } from "$lib";
  import { Button, Svg } from "theui-svelte";

  interface Props {children?: Snippet, title?: string, id?: string}

  let {children, title, id = title ? processID(title, false) : randomString()}: Props = $props()

  let copied: boolean = $state(false);

  const copy = $derived(() => navigator.clipboard.writeText(page.url.href+"#"+id)
  .then(() => {
    copied = true
    setTimeout(()=>{copied = false}, 3000)
  })
  .catch(err => console.error("Error copying text:", err)));
</script>

<section class="docs-block flex flex-col gap-4 mb-16 scroll-mt-2" id={id}>
  {#if title}
    <div class="flex items-center gap-2">
      <h2 class="my-0 font-bold text-xl font-body">{@html title}</h2>
      {#if id}
        <span class="not-prose ms-auto flex items-center">
          <button class="font-medium w-6 h-6 flex justify-center items-center text-default opacity-40 hover:opacity-100 transition-opacity duration-300" data-tooltip="Copy link" data-tooltip-position="right" onclick={()=>copy()}>
            <Svg size={1}>
              <path class:fill-green-500={copied} d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
              <path class:fill-green-500={copied} d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </Svg>
          </button>
        </span>
      {/if}
    </div>
  {/if}
  {@render children?.()}
</section>