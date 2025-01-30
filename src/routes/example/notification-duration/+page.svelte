<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[260px] px-4 py-4 flex">
  <ButtonGroup class="mt-auto" size="sm">
    <Button onclick={()=>notify("Hello world!", "error", {removeAfter: 0})}>0</Button>
    <Button onclick={()=>notify("Hello world!", "error", {removeAfter: 3000})}>3000</Button>
    <Button onclick={()=>notify("Hello world!", "error", {removeAfter: 5000})}>5000 (default)</Button>
    <Button onclick={()=>notify("Hello world!", "error", {removeAfter: 10000})}>10000</Button>
  </ButtonGroup>
</Container>