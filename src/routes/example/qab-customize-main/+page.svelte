<script lang="ts">
  import { Qab, QabItem, Svg } from "theui-svelte";
</script>

<Qab class="border-4 border-brand-primary-200">
  {#snippet icon()}
  <Svg class="w-6 h-6">
    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  </Svg>
  {/snippet}
</Qab>