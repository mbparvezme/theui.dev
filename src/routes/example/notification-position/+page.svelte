<script>
  import { Container, Button, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />
<Container>
  <Button class="mt-auto" onclick={()=>notify("Hello world!")}>Notify</Button>
</Container>