<script lang="ts">
	import { onMount } from 'svelte';
	import Terminal from './Terminal.svelte';

	const TITLES = [
		'Frontend Developer',
		'UI Engineer',
		'Vue 3 Specialist',
		'SvelteKit Builder',
		'TypeScript Advocate'
	];

	let titleIndex = $state(0);
	let displayTitle = $state('');
	let isDeleting = $state(false);
	let heroVisible = $state(false);

	async function sleep(ms: number) {
		return new Promise<void>((r) => setTimeout(r, ms));
	}

	async function typewriter() {
		while (true) {
			const full = TITLES[titleIndex];
			if (!isDeleting) {
				displayTitle = full.slice(0, displayTitle.length + 1);
				if (displayTitle === full) {
					await sleep(2200);
					isDeleting = true;
				} else {
					await sleep(80);
				}
			} else {
				displayTitle = displayTitle.slice(0, -1);
				if (displayTitle === '') {
					isDeleting = false;
					titleIndex = (titleIndex + 1) % TITLES.length;
					await sleep(400);
				} else {
					await sleep(45);
				}
			}
		}
	}

	onMount(() => {
		setTimeout(() => (heroVisible = true), 100);
		typewriter();
	});
</script>

<section
	id="hero"
	class="relative min-h-screen flex items-center pt-20 overflow-hidden"
	aria-label="Hero section"
>
	<!-- Animated background -->
	<div class="absolute inset-0 bg-grid opacity-60 dark:opacity-40 pointer-events-none" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-[#0a0f1e] dark:via-[#0a0f1e]/90 dark:to-[#0a0f1e] pointer-events-none" aria-hidden="true"></div>

	<!-- Glow orbs -->
	<div class="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true"></div>
	<div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" style="animation-delay: 1.5s;"></div>

	<div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

			<!-- Left: Text content -->
			<div class="space-y-6">
				<div
					class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
						bg-brand-50 dark:bg-brand-500/10
						border border-brand-200 dark:border-brand-500/20
						text-brand-700 dark:text-brand-300 text-sm font-medium
						transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
					style="transition-delay: 0ms;"
				>
					<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
					Available for projects
				</div>

				<div
					class="transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
					style="transition-delay: 100ms;"
				>
					<h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
						Hi, I'm <br />
						<span class="gradient-text">Tech Views</span>
					</h1>
				</div>

				<div
					class="h-10 transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
					style="transition-delay: 200ms;"
				>
					<p class="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2" aria-live="polite" aria-atomic="true">
						<span>{displayTitle}</span>
						<span class="inline-block w-[3px] h-[1.2em] bg-brand-500 align-middle animate-blink" aria-hidden="true"></span>
					</p>
				</div>

				<p
					class="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg text-balance
						transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
					style="transition-delay: 300ms;"
				>
					I build fast, accessible, and beautifully crafted web experiences. From real-time dashboards to encrypted messaging apps — I ship products that feel great to use.
				</p>

				<div
					class="flex flex-wrap gap-3 transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
					style="transition-delay: 400ms;"
				>
					<a href="#projects" class="btn-primary">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="8" height="8" x="2" y="2" rx="1"/><rect width="8" height="8" x="14" y="2" rx="1"/><rect width="8" height="8" x="14" y="14" rx="1"/><rect width="8" height="8" x="2" y="14" rx="1"/></svg>
						View Projects
					</a>
					<a href="#contact" class="btn-outline">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
						Get in Touch
					</a>
				</div>

				<div
					class="flex items-center gap-4 pt-2 transition-all duration-700 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
					style="transition-delay: 500ms;"
				>
					<a
						href="https://github.com/eghos-techviews"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub profile"
						class="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10
							flex items-center justify-center
							text-slate-500 dark:text-slate-400
							hover:border-brand-500/50 hover:text-brand-500 dark:hover:text-brand-400
							hover:bg-brand-50 dark:hover:bg-brand-500/10
							transition-all duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn profile"
						class="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10
							flex items-center justify-center
							text-slate-500 dark:text-slate-400
							hover:border-brand-500/50 hover:text-brand-500 dark:hover:text-brand-400
							hover:bg-brand-50 dark:hover:bg-brand-500/10
							transition-all duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
					</a>
					<div class="h-6 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true"></div>
					<a
						href="#contact"
						aria-label="View resume — contact me"
						class="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
						Resume
					</a>
				</div>
			</div>

			<!-- Right: Terminal -->
			<div
				class="transition-all duration-700 delay-300 {heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay: 350ms;"
			>
				<div class="relative">
					<div class="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-accent-500/20 rounded-2xl blur-2xl opacity-60 animate-float" aria-hidden="true" style="animation-delay: 0.5s;"></div>
					<div class="relative">
						<Terminal />
					</div>
				</div>

				<p class="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 font-mono">
					Interactive terminal — type <code class="text-brand-500">help</code> for commands
				</p>
			</div>
		</div>

		<!-- Scroll hint -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500" aria-hidden="true">
			<span class="text-xs tracking-widest uppercase font-medium">Scroll</span>
			<div class="w-[1px] h-10 bg-gradient-to-b from-brand-400 to-transparent animate-pulse"></div>
		</div>
	</div>
</section>
