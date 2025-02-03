<script>
  // @ts-ignore
  import { Popup, Container } from "theui-svelte";
</script>

<Container class="text-center">
  <p class="text-2xl">Move your mouse pointer outside of the page to view the exit popup!</p>
</Container>

<Popup trigger="onEntryExit">
  The popup appears in both entry and exit time!
</Popup>