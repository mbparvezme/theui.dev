<script>
  import { Container, Button, ButtonGroup, Notification, notify } from "theui-svelte";
</script>

<Notification position="bottom-end" />

<Container class="h-[260px] px-4 py-4 flex">
  <div class="mt-auto">
    <p class="font-semibold">Default theme</p>
    <ButtonGroup  size="sm">
      <Button onclick={()=>notify("Hello world!", "success", {variant: "card"})}>Card (Default)</Button>
      <Button onclick={()=>notify("Hello world!", "success", {variant: "borderTop"})}>Border Top</Button>
      <Button onclick={()=>notify("Hello world!", "success", {variant: "borderStart"})}>Border Start</Button>
      <Button onclick={()=>notify("Hello world!", "success", {variant: "borderBottom"})}>Border Bottom</Button>
    </ButtonGroup>
    <p class="font-semibold mt-4">Light theme</p>
    <ButtonGroup size="sm">
      <Button onclick={()=>notify("Hello world!", "success", {theme: "soft", variant: "card"})}>Card (Default)</Button>
      <Button onclick={()=>notify("Hello world!", "success", {theme: "soft", variant: "borderTop"})}>Border Top</Button>
      <Button onclick={()=>notify("Hello world!", "success", {theme: "soft", variant: "borderStart"})}>Border Start</Button>
      <Button onclick={()=>notify("Hello world!", "success", {theme: "soft", variant: "borderBottom"})}>Border Bottom</Button>
    </ButtonGroup>
  </div>
</Container>