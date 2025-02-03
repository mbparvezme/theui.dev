<script>
  // @ts-ignore
  import { Popup, Container } from "theui-svelte";
</script>

<Container class="text-center">
  <p class="text-2xl">Move your mouse pointer outside of the page to view the exit popup!</p>
</Container>
<span class="text-red-500"></span>
<Popup trigger="onEntryExit">
  {#snippet entryContent()}
    <p class="text-success-500 font-bold">I'm content from entry popup!</p>
  {/snippet}

  {#snippet exitContent()}
    <p class="text-error-500 font-bold">I'm content from exit popup!</p>
  {/snippet}
</Popup>