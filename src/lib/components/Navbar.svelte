<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	const navLinks = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMenu() {
		menuOpen = false;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
		{scrolled ? 'glass border-b border-slate-200/60 dark:border-white/5 py-3 shadow-sm' : 'py-5'}"
>
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between" aria-label="Primary navigation">
		<a href="/" class="flex items-center gap-2 group" aria-label="Tech Views home">
			<span class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-brand-500/40 transition-shadow duration-300">TV</span>
			<span class="font-bold text-slate-900 dark:text-white text-lg tracking-tight">Tech Views</span>
		</a>

		<ul class="hidden md:flex items-center gap-6" role="list">
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
				class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
					text-white bg-gradient-to-r from-brand-500 to-accent-500
					hover:from-brand-600 hover:to-accent-600
					transition-all duration-200 shadow-md hover:shadow-brand-500/30 active:scale-95"
			>
				Hire Me
			</a>
			<button
				onclick={() => (menuOpen = !menuOpen)}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				class="md:hidden w-10 h-10 rounded-xl flex items-center justify-center
					text-slate-600 dark:text-slate-300
					hover:bg-slate-100 dark:hover:bg-white/10
					transition-colors duration-200"
			>
				{#if menuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
				{/if}
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<div
			id="mobile-menu"
			class="md:hidden glass border-t border-slate-200/60 dark:border-white/10 px-4 py-4 space-y-1"
			role="menu"
		>
			{#each navLinks as link}
				<a
					href={link.href}
					role="menuitem"
					onclick={closeMenu}
					class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200
						hover:bg-slate-100 dark:hover:bg-white/10
						hover:text-brand-500 dark:hover:text-brand-400
						transition-colors duration-200"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="#contact"
				role="menuitem"
				onclick={closeMenu}
				class="block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center
					text-white bg-gradient-to-r from-brand-500 to-accent-500
					hover:from-brand-600 hover:to-accent-600 transition-all duration-200"
			>
				Hire Me
			</a>
		</div>
	{/if}
</header>
