<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme.svelte.js';
	import { onMount } from 'svelte';
	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<title>Tech Views — Frontend Developer</title>
	<meta name="description" content="Tech Views is a frontend developer building fast, accessible, and beautifully crafted web experiences. Vue 3, SvelteKit, TypeScript." />
	<meta property="og:title" content="Tech Views — Frontend Developer Portfolio" />
	<meta property="og:description" content="Frontend developer specialising in Vue 3, SvelteKit, TypeScript and modern UI engineering." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
