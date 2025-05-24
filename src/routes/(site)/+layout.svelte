<script lang="ts">
  import { type Snippet } from "svelte";
	import '../../app.css';
	import { page } from "$app/state";
	import {Tooltip} from "theui-svelte";
	import Navbar from  "$lib/ui/Navbar.svelte";
	import Footer from  "$lib/ui/Footer.svelte";
	import Shade from "$lib/ui/Shade.svelte";

	let { children }: {children: Snippet} = $props();
</script>

<Navbar />

{@render children()}

<Footer />

{#if !page.url.pathname.includes('docs')}
<Shade color="red" position="top-right" />
<Shade color="green" position="bottom-left" />
{/if}

<Tooltip />