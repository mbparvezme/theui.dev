<script>
  import { Container, Button, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />
<Container>
  <Button onclick={()=>notify("Hello world!")}>Notify</Button>
</Container>