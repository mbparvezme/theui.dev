<script>
  import { Container, Button, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[210px] px-4 py-4 flex">
  <Button class="mt-auto" size="sm" onclick={()=>notify("Hello world!")}>Notify</Button>
</Container>