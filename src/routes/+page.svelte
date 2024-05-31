<div class="h-screen pt-32">
  <div class="flex gap-8 justify-center">
    <div class="w-32 h-32 box box-11"></div>
    <div class="w-32 h-32 box box-12"></div>
    <div class="w-32 h-32 box box-13"></div>
    <div class="w-32 h-32 box box-14"></div>
    <div class="w-32 h-32 box box-15"></div>
    <div class="w-32 h-32 box box-16"></div>
    <div class="w-32 h-32 box box-17"></div>
    <div class="w-32 h-32 box box-18"></div>
    <div class="w-32 h-32 box box-19"></div>
  </div>
</div>

<div class="h-screen"></div>
<div class="h-screen"></div>

<style lang="postcss">
  .box{
    --color-var1: 153 22 136;
    --color-var2: #159988;;
    border: 1px solid #f5f5f5;
    @apply shrink-0 flex-wrap;
  }
  .box-11{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 20%) c h);
  }
  .box-12{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 40%) c h);
  }
  .box-13{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 60%) c h);
  }
  .box-14{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 80%) c h);
  }
  .box-15{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 100%) c h);
  }
  .box-16{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 120%) c h);
  }
  .box-17{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 140%) c h);
  }
  .box-18{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 160%) c h);
  }
  .box-19{
    background-color: oklch(from rgb(var(--color-var1) / 1) calc(l * 180%) c h);
  }
</style>