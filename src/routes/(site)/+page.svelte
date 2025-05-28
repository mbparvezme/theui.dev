<script lang="ts">
  import { Container, Button, Svg } from "theui-svelte"
  import SEO from "$lib/SEO.svelte"
  import PageHead from "$lib/ui/PageHeader.svelte"
</script>

<SEO />

<PageHead
  h1 = "TheUI Component Library,<br class='sm:hidden md:block'> Theme &amp; UI Blocks"
  h2 = "Build fast, deliver faster"
  ctaTxt = "READ THE DOCS"
  ctaUrl = "/docs"
>
  Accessible, highly customizable, and fully typed Tailwind CSS-based components libraries, Themes and UI Blocks for your next project!
  {#snippet beforeItem()}
    <a href="/docs" class="gradient rounded-full">
      <span class="backdrop-blur-md bg-white/30 px-2 py-1 font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2 rounded-full">🤡 <span>TheUI Svelte: Svelte 5 component library</span> &rightarrow;</span>
    </a>
  {/snippet}
</PageHead>

<Container>
  <p class="flex">
    <span class="w-20 h-20 bg-sky-200 text-indigo-600 dark:bg-indigo-600 dark:text-sky-50 rounded-xl mb-8 flex items-center justify-center">
      <Svg size={3}>
        <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/><path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>
      </Svg>
    </span>
  </p>
  <h2 class="font-bold text-4xl mb-4">Components Libraries</h2>
  <div class="text-gray-600 dark:text-gray-400 mb-8">
    <p class="mb-16 text-base sm:text-lg lg:text-2xl">Get started with a modern open-source components library and interactive UI components built on top of utility classes from Tailwind CSS. We are extending our framework coverage and adding/updating the components daily!</p>
    <h3 class="text-2xl font-bold">Available Components Libraries</h3>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="p-1 gradient rounded-lg">
      <div class="bg-primary p-8 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 900"><style type="text/css">.st0{fill:#FF3E00;}.st1{fill:#FFFFFF;}.st2{opacity:0.96;}.st3{fill:url(#SVGID_1_);}.st5{fill:#333333;}</style><g><g><path class="st0" d="M1406.7,266.2c-46.5-66.4-138.3-86.1-204.7-43.9l-116.6,74.2c-31.9,20-53.8,52.5-60.5,89.5 c-5.6,30.8-0.7,62.6,13.9,90.3c-10,15.1-16.8,32.1-20,49.9c-6.7,37.7,2.1,76.5,24.4,107.7c46.5,66.5,138.3,86.2,204.7,43.9 l116.6-74.2c31.9-20,53.8-52.5,60.4-89.5c5.6-30.8,0.7-62.6-13.9-90.3c10-15.1,16.8-32.1,20-49.9 C1437.8,336.1,1429.1,297.3,1406.7,266.2"/><path class="fill-primary" d="M1190.6,640.1c-37.6,9.8-77.3-4.9-99.4-36.8c-13.4-18.7-18.7-42.1-14.6-64.7c0.7-3.7,1.6-7.3,2.8-10.9 l2.2-6.7l6,4.4c13.8,10.1,29.2,17.8,45.6,22.8l4.3,1.3l-0.4,4.3c-0.5,6.1,1.1,12.3,4.7,17.3c6.7,9.6,18.6,14,30,11.1 c2.5-0.7,4.9-1.7,7.2-3.1l116.6-74.2c5.8-3.6,9.7-9.5,11-16.2c1.2-6.8-0.4-13.9-4.4-19.5c-6.7-9.6-18.6-14-30-11.1 c-2.5,0.7-4.9,1.7-7.2,3.1l-44.5,28.3c-7.3,4.6-15.3,8.1-23.7,10.4c-37.6,9.8-77.3-4.9-99.4-36.8c-13.4-18.7-18.7-42.1-14.7-64.7 c4-22.2,17.2-41.8,36.4-53.8l116.6-74.2c7.3-4.7,15.3-8.2,23.7-10.4c37.6-9.8,77.3,4.9,99.4,36.8c13.4,18.7,18.7,42.1,14.7,64.7 c-0.7,3.7-1.6,7.3-2.8,10.9l-2.2,6.7l-6-4.4c-13.8-10.1-29.2-17.8-45.6-22.8l-4.3-1.3l0.4-4.3c0.5-6.1-1.1-12.3-4.7-17.3 c-6.7-9.6-18.6-14-30-11.1c-2.5,0.7-4.9,1.7-7.2,3.1l-116.6,74.2c-5.8,3.6-9.7,9.5-10.9,16.2c-1.2,6.8,0.4,13.9,4.4,19.5 c6.7,9.6,18.6,14,30,11.1c2.5-0.7,4.9-1.7,7.2-3.1l44.5-28.3c7.3-4.7,15.3-8.2,23.7-10.4c37.6-9.8,77.3,4.9,99.4,36.8 c13.4,18.7,18.7,42.1,14.7,64.7c-4,22.2-17.2,41.8-36.3,53.8l-116.6,74.2C1207,634.3,1199,637.9,1190.6,640.1"/></g><g class="st2"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="580.0374" y1="263.8208" x2="226.7406" y2="617.1176" gradientTransform="matrix(1 0 0 -1 0 902)"><stop offset="0" style="stop-color:#E7BF00"/><stop offset="1.810000e-02" style="stop-color:#EEB804"/><stop offset="6.230000e-02" style="stop-color:#F9AD0A"/><stop offset="0.1096" style="stop-color:#FDA90C"/><stop offset="0.2225" style="stop-color:#F3903F"/><stop offset="0.3513" style="stop-color:#ED683C"/><stop offset="0.4711" style="stop-color:#E93E3A"/><stop offset="0.6024" style="stop-color:#E93E3A"/><stop offset="0.7179" style="stop-color:#D8432D"/><stop offset="0.8482" style="stop-color:#E14030"/><stop offset="1" style="stop-color:#FF008E"/></linearGradient><path class="st3" d="M170.1,487.8c-6.6-46.1-3.8-84.4,8.2-115c12-30.6,24.2-54.4,36.6-71.5c12.5-17.3,27.1-33,44-47.1 c33.4-27.9,72.9-45.8,118.5-53.7c16.6-1.8,30.8,1.6,42.6,10.3c11.9,8.7,19.6,21.3,23.1,37.8c1.7,16.8-1.8,31.2-10.4,43.2 c-8.5,11.8-21,19.5-37.4,23.1c-24.6,4.1-43.7,11.8-57.3,23.2c-13.6,11.4-23.7,21.8-30.4,31c-6.7,9.3-12.1,19.3-16.4,30.1 c-8.8,22.1-11.3,45.6-7.6,70.5c4,24.8,11.7,44,22.9,57.7c11.3,13.6,21.5,23.8,30.7,30.6c9.2,6.7,19.3,12.3,30.2,16.7 c22,8.9,45.3,11.4,70,7.6c37.3-6.8,66.5-24.8,87.6-54c21.1-29.2,29.2-62.4,24.3-99.6l0.2-0.2c-1.9-17.5,1.4-32.2,10-44.2 s21.1-19.6,37.4-23.1c16.6-1.8,30.8,1.6,42.6,10.3c11.9,8.7,19.6,21.6,23.1,38.9l0.2,0.2c6.4,45.3,3.6,83.2-8.4,113.8 c-12,30.6-24.3,54.5-36.8,71.8c-12.4,17.1-27,32.7-43.8,46.8c-33.5,27.9-73,45.8-118.5,53.7c-45.8,6.6-83.8,3.8-114.2-8.3 c-30.3-12.1-54.1-24.5-71.3-37c-17-12.4-32.5-27.1-46.5-44.1C195.8,573.4,178.1,533.6,170.1,487.8z"/><linearGradient id="SVGID_00000166634974914787791630000011214014879667173807_" gradientUnits="userSpaceOnUse" x1="649.6224" y1="571.7797" x2="567.3552" y2="654.0468" gradientTransform="matrix(1 0 0 -1 0 902)"><stop offset="0" style="stop-color:#E7BF00"/><stop offset="1.810000e-02" style="stop-color:#EEB804"/><stop offset="6.230000e-02" style="stop-color:#F9AD0A"/><stop offset="0.1096" style="stop-color:#FDA90C"/><stop offset="0.2225" style="stop-color:#F3903F"/><stop offset="0.3513" style="stop-color:#ED683C"/><stop offset="0.4711" style="stop-color:#E93E3A"/><stop offset="0.6024" style="stop-color:#E93E3A"/><stop offset="0.7179" style="stop-color:#D8432D"/><stop offset="0.8482" style="stop-color:#E14030"/><stop offset="1" style="stop-color:#FF008E"/></linearGradient><path style="fill:url(#SVGID_00000166634974914787791630000011214014879667173807_);" d="M649.5,330.4 c-22.8,23-59.6,23.1-82.3,0.3c-22.6-22.8-22.5-59.9,0.3-82.9c22.8-23,59.6-23.1,82.3-0.3C672.4,270.3,672.3,307.4,649.5,330.4z"/></g><path class="st5" d="M835.5,461.5H790v-22.8h45.5v-52.4h20.6v52.4h45.6v22.8h-45.6v52.1h-20.6V461.5z"/></g></svg>
        <h1 class="font-bold text-lg mb-4 border-t-2 dark:border-gray-900 pt-4">Svelte Components</h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">Component library for Svelte framework based on TailwindCSS</p>
        <div class="flex items-center justify-center gap-4">
          <Button href="/docs">Docs &rarr;</Button>
          <!-- <Button href="/components/sveltekit" outline={true}>Details</Button> -->
        </div>
      </div>
    </div>
    <div class="p-1 gradient rounded-lg opacity-40 select-none">
      <div class="bg-primary p-8 rounded-lg flex items-center justify-center h-full text-lg">
        COMING SOON
      </div>
    </div>
  </div>
</Container>

<Container>
  <p class="flex">
    <span class="w-20 h-20 bg-green-200 text-emerald-600 dark:bg-emerald-600 dark:text-green-50 rounded-xl mb-8 flex items-center justify-center">
      <Svg size={3}>
        <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
      </Svg>
    </span>
  </p>
  <h2 class="font-bold text-4xl mb-4">UI Blocks</h2>
  <div class="text-gray-600 dark:text-gray-400 mb-8">
    <p class="mb-16 text-base sm:text-lg lg:text-2xl">Accessible, highly customizable, fully responsive modern UI blocks, crafted based on TailwindCSS. Get started with our UI kits library, or browse all of the examples of the categories of your next project.</p>
    <h3 class="text-2xl font-bold">Available UI Blocks</h3>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="p-1 gradient rounded-lg opacity-40 select-none">
      <div class="bg-primary px-8 py-24 rounded-lg flex items-center justify-center h-full text-lg">
        COMING SOON
      </div>
    </div>
  </div>
</Container>

<Container>
  <p class="flex">
    <span class="w-20 h-20 bg-fuchsia-200 text-fuchsia-600 dark:bg-fuchsia-600 dark:text-fuchsia-50 rounded-xl mb-8 flex items-center justify-center">
      <Svg size={3}>
        <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"/>
        <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"/>
      </Svg>
    </span>
  </p>
  <h2 class="font-bold text-4xl mb-4">Themes</h2>
  <div class="text-gray-600 dark:text-gray-400 mb-8">
    <p class="mb-16 text-base sm:text-lg lg:text-2xl">Get a ready-made theme for your next project. You can download or purchase templates, API-ready web themes, and backend-ready web applications.</p>
    <h3 class="text-2xl font-bold">Available Themes</h3>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="p-1 gradient rounded-lg opacity-40 select-none">
      <div class="bg-primary px-8 py-24 rounded-lg flex items-center justify-center h-full text-lg">
        COMING SOON
      </div>
    </div>
  </div>
</Container>