<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification/>

<Container class="h-[260px] px-4 py-4 flex">
  <div class="mt-auto flex flex-col gap-2">
    <Button size="sm" onclick={()=>notify("Hello world!", "error", {removeOnClick: true})}>Click on the notification to remove</Button>
    <Button size="sm" onclick={()=>notify("Hello world!", "error", {removeOnClick: false})}>Notification will not remove on click</Button>
  </div>
</Container>