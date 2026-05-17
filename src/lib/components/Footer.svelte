<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-cream-200 dark:border-ink-800/60 bg-cream-100/50 dark:bg-[#0b0907]/50">
	<div class="max-w-6xl mx-auto px-5 sm:px-8 py-8">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
			<span class="font-serif font-bold text-ink-900 dark:text-cream-100 text-sm">Tech Views</span>

			<p class="text-xs text-ink-400 dark:text-ink-600 text-center">
				&copy; {year} — Built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="text-brand-500 hover:underline underline-offset-2">SvelteKit</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="text-brand-500 hover:underline underline-offset-2">Tailwind</a>
			</p>

			<div class="flex items-center gap-4">
				<a href="https://github.com/eghos-techviews" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-ink-400 dark:text-ink-600 hover:text-ink-800 dark:hover:text-cream-200 transition-colors duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
				</a>
				<a href="#hero" aria-label="Back to top" class="text-ink-400 dark:text-ink-600 hover:text-brand-500 transition-colors duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
				</a>
			</div>
		</div>
	</div>
</footer>
