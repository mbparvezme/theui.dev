<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[260px] px-4 py-4 flex">
  <ButtonGroup class="mt-auto" size="sm">
    <Button onclick={()=>notify("Hello world!", "error", {theme: "gradient"})}>Error (Default)</Button>
    <Button onclick={()=>notify("Hello world!", "info", {theme: "gradient"})}>Info</Button>
    <Button onclick={()=>notify("Hello world!", "success", {theme: "gradient"})}>Success</Button>
    <Button onclick={()=>notify("Hello world!", "warning", {theme: "gradient"})}>Warning</Button>
  </ButtonGroup>
</Container>