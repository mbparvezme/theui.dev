<script lang="ts">
  import { Qab, QabItem, ButtonGroup, Button } from "theui-svelte";
  type SIZE = "sm" | "md" | "lg" | "xl"
  let SZ: SIZE = $state("lg")

  $effect(() => {
    console.log(SZ)
  })
</script>

<!-- <div class="fixed bottom-8 start-4">
  <ButtonGroup>
    <Button onclick={() => SZ = "sm"}>sm</Button>
    <Button onclick={() => SZ = "md"}>md (default)</Button>
    <Button onclick={() => SZ = "lg"}>lg</Button>
    <Button onclick={() => SZ = "xl"}>xl</Button>
  </ButtonGroup>
</div> -->

<Qab size="lg">
  <QabItem>1</QabItem>
  <QabItem>2</QabItem>
</Qab>