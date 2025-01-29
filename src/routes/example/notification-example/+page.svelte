<script>
  import { Container, Button, Notification, notify } from "theui-svelte";
</script>

<Notification />
<Container>
  <Button class="mt-auto" onclick={()=>notify("Hello world!")}>Notify</Button>
</Container>