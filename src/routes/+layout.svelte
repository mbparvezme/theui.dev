<script lang="ts">
	import "theui-svelte-test/style";
	import '../app.css';

	import {Container} from "theui-svelte-test"

	let { children } = $props();
</script>

<Container>
	{@render children()}
</Container>
