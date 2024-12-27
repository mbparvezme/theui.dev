<script lang="ts">
  import { type Snippet } from "svelte";
	import "theui-svelte/style";
	import '../app.css';
	import Navbar from  "$lib/ui/Navbar.svelte";
	import Footer from  "$lib/ui/Footer.svelte";

	let { children }: {children: Snippet} = $props();
</script>

<Navbar />

{@render children()}

<Footer />