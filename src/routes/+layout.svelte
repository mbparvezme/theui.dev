<script lang="ts">
  import "theui-svelte/style"; // Add this line inside script tag
  import "../app.postcss";
  import {Navbar, NavBrand, NavContainer, NavLink, Notification, DarkMode, Tooltip} from "theui-svelte"
  import Footer from "$lib/ui/Footer.svelte";
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <!-- <link rel="manifest" href="/site.webmanifest"> -->
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e93e3a">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Roboto+Slab:wght@100;400;700;900&display=swap" rel="stylesheet">
</svelte:head>

<!-- Top and left position value should be removed -->
<Navbar class="bg-gray-100 dark:bg-gray-800 z-[21]">
  <NavBrand>THEUI SVELTE</NavBrand>
  <NavContainer align="right">
    <NavLink href="/docs">Documentation</NavLink>
  </NavContainer>
  <DarkMode />
</Navbar>

<slot />

<Footer />
<Tooltip />
<Notification />