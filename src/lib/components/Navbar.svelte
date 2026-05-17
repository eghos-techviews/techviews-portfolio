<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	const navLinks = [
		{ href: '#projects', label: 'Work' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
		{scrolled
		? 'py-3 bg-cream-50/90 dark:bg-[#0f0c08]/90 backdrop-blur-md border-b border-cream-200 dark:border-ink-800/60 shadow-sm'
		: 'py-5 bg-transparent'}"
>
	<nav class="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between" aria-label="Primary navigation">

		<a href="/" class="font-serif font-bold text-lg text-ink-900 dark:text-cream-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200" aria-label="Tech Views home">
			Tech Views
		</a>

		<ul class="hidden md:flex items-center gap-8" role="list">
			{#each navLinks as link}
				<li>
					<a href={link.href} class="nav-link">{link.label}</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<ThemeToggle />
			<a
				href="#contact"
				class="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold
					text-cream-50 bg-brand-600 hover:bg-brand-700
					dark:bg-brand-500 dark:hover:bg-brand-600
					transition-colors duration-200 active:scale-95"
			>
				Hire me
			</a>
			<button
				onclick={() => (menuOpen = !menuOpen)}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				class="md:hidden w-10 h-10 rounded-lg flex items-center justify-center
					text-ink-600 dark:text-ink-400
					hover:bg-cream-200 dark:hover:bg-ink-800
					transition-colors duration-200"
			>
				{#if menuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
				{/if}
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<div
			id="mobile-menu"
			class="md:hidden bg-cream-50/95 dark:bg-[#0f0c08]/95 backdrop-blur-md border-t border-cream-200 dark:border-ink-800/60 px-5 py-4 space-y-1"
			role="menu"
		>
			{#each navLinks as link}
				<a
					href={link.href}
					role="menuitem"
					onclick={() => (menuOpen = false)}
					class="block px-4 py-2.5 rounded-lg text-sm font-medium text-ink-600 dark:text-ink-300
						hover:bg-cream-200 dark:hover:bg-ink-800
						hover:text-ink-900 dark:hover:text-cream-100
						transition-colors duration-200"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="#contact"
				role="menuitem"
				onclick={() => (menuOpen = false)}
				class="block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center
					text-cream-50 bg-brand-600 hover:bg-brand-700 transition-colors duration-200"
			>
				Hire me
			</a>
		</div>
	{/if}
</header>
