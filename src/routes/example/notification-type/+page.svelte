<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[260px] px-4 py-4 flex">
  <ButtonGroup class="mt-auto" size="sm">
    <Button onclick={()=>notify("Hello world!")}>Error (Default)</Button>
    <Button onclick={()=>notify("Hello world!", "info")}>Info</Button>
    <Button onclick={()=>notify("Hello world!", "success")}>Success</Button>
    <Button onclick={()=>notify("Hello world!", "warning")}>Warning</Button>
  </ButtonGroup>
</Container>