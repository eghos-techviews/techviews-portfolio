<script lang="ts">
	import { theme } from '$lib/stores/theme.svelte.js';
</script>

<button
	onclick={() => theme.toggle()}
	aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	class="w-10 h-10 rounded-lg flex items-center justify-center
		text-ink-500 dark:text-ink-400
		hover:bg-cream-200 dark:hover:bg-ink-800
		hover:text-ink-900 dark:hover:text-cream-200
		transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500"
>
	{#if theme.isDark}
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4"/>
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
		</svg>
	{/if}
</button>
