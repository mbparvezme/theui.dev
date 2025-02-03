<script>
  import { Popup, Container } from "theui-svelte";
</script>

<Container class="text-center">
  <p class="text-2xl">Move your mouse pointer outside of the page!</p>
</Container>
<Popup trigger="onExit">
  This is exit popup!
</Popup>