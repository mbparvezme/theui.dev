<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />
<Container>
  <ButtonGroup size="sm">
    <Button onclick={()=>notify("Hello world!", "error", {theme: "light"})}>Error (Default)</Button>
    <Button onclick={()=>notify("Hello world!", "info", {theme: "light"})}>Info</Button>
    <Button onclick={()=>notify("Hello world!", "success", {theme: "light"})}>Success</Button>
    <Button onclick={()=>notify("Hello world!", "warning", {theme: "light"})}>Warning</Button>
  </ButtonGroup>
</Container>