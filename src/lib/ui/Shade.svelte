<script lang="ts">
  let {color = "red", position = "top-right"}: {color: 'red' | 'blue' | 'green', position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'} = $props()
</script>

<div class="tui-shade fixed z-[-1] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
  class:shade-red     = {color == 'red'}
  class:shade-blue    = {color == 'blue'}
  class:shade-green   = {color == 'green'}
  class:shade-top-left    = {position == 'top-left'}
  class:shade-top-right   = {position == 'top-right'}
  class:shade-bottom-left    = {position == 'bottom-left'}
  class:shade-bottom-right   = {position == 'bottom-right'}
></div>

<style>
  .tui-shade.shade-blue {
    background-image: linear-gradient(45deg,#059dff,#36c6f0);
  }
  .tui-shade.shade-red {
    background-image: linear-gradient(45deg,#fb5343,#6549d5);
  }
  .tui-shade.shade-green {
    background-image: linear-gradient(45deg,#12953e,#149886);
  }
  .tui-shade.shade-top-left {
    left: -300px;
    top: -300px;
    right: auto;
    bottom: auto;
  }
  .tui-shade.shade-top-right {
    top: 150px;
    right: -300px;
    left: auto;
    bottom: auto;
  }
  .tui-shade.shade-bottom-left {
    left: -300px;
    bottom: -300px;
    top: auto;
    right: auto;
  }
  .tui-shade.shade-bottom-right {
    right: -300px;
    bottom: -300px;
    left: auto;
    top: auto;
  }
</style>