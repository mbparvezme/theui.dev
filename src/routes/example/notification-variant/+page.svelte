<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[260px] px-4 py-4 flex">
  <div class="mt-auto">
    <p class="font-semibold">Default theme</p>
    <ButtonGroup  size="sm">
      <Button onclick={()=>notify("Hello world!", "warning", {variant: "card"})}>Card (Default)</Button>
      <Button onclick={()=>notify("Hello world!", "error", {variant: "borderBottom"})}>Border Bottom</Button>
      <Button onclick={()=>notify("Hello world!", "info", {variant: "borderStart"})}>Border Start</Button>
      <Button onclick={()=>notify("Hello world!", "success", {variant: "borderTop"})}>Border Top</Button>
    </ButtonGroup>
    <p class="font-semibold mt-4">Light theme</p>
    <ButtonGroup size="sm">
      <Button onclick={()=>notify("Hello world!", "warning", {theme: "light", variant: "card"})}>Card (Default)</Button>
      <Button onclick={()=>notify("Hello world!", "error", {theme: "light", variant: "borderBottom"})}>Border Bottom</Button>
      <Button onclick={()=>notify("Hello world!", "info", {theme: "light", variant: "borderStart"})}>Border Start</Button>
      <Button onclick={()=>notify("Hello world!", "success", {theme: "light", variant: "borderTop"})}>Border Top</Button>
    </ButtonGroup>
  </div>
</Container>