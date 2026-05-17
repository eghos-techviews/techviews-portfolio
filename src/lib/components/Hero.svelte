<script lang="ts">
	import { onMount } from 'svelte';
	import Terminal from './Terminal.svelte';

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => (visible = true), 80);
	});
</script>

<section
	id="hero"
	class="relative min-h-screen flex items-center pt-24 overflow-hidden paper-texture"
	aria-label="Introduction"
>
	<!-- Warm dot grid -->
	<div class="absolute inset-0 bg-grid opacity-50 dark:opacity-30 pointer-events-none" aria-hidden="true"></div>

	<!-- Warm gradient wash -->
	<div class="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50/90 to-cream-50 dark:from-[#0f0c08] dark:via-[#0f0c08]/95 dark:to-[#0f0c08] pointer-events-none" aria-hidden="true"></div>

	<!-- Soft warm glow -->
	<div class="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
		style="background: radial-gradient(circle, rgba(194,115,42,0.07) 0%, transparent 70%);"
		aria-hidden="true">
	</div>

	<div class="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 w-full">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

			<!-- Left: copy -->
			<div class="space-y-7">

				<div
					class="transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:0ms"
				>
					<span class="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase text-brand-500 dark:text-brand-400">
						<span class="w-6 h-[1.5px] bg-brand-500 dark:bg-brand-400 inline-block" aria-hidden="true"></span>
						QA tester. Frontend developer. Builder.
					</span>
				</div>

				<div
					class="transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:100ms"
				>
					<h1 class="display-heading text-5xl sm:text-6xl lg:text-[72px]">
						I used to break<br/>
						things for a<br/>
						<em class="not-italic text-brand-600 dark:text-brand-400">living.</em>
					</h1>
				</div>

				<div
					class="transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:200ms"
				>
					<p class="text-base sm:text-lg body-text max-w-md text-balance">
						Started in QA — found every crack, every edge case, every way a product could fall apart. Then I got tired of only knowing what breaks. I wanted to be the one building.
					</p>
				</div>

				<p
					class="text-sm body-text max-w-md text-balance transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:280ms"
				>
					Frontend is my entry point. Software engineering is the goal. I'm working my way from the surface to the systems — and I intend to understand every layer.
				</p>

				<div
					class="flex flex-wrap gap-3 pt-1 transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:360ms"
				>
					<a href="#projects" class="btn-primary">
						See my work
					</a>
					<a href="#contact" class="btn-outline">
						Get in touch
					</a>
				</div>

				<div
					class="flex items-center gap-4 pt-1 transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
					style="transition-delay:420ms"
				>
					<a
						href="https://github.com/eghos-techviews"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub — eghos-techviews"
						class="flex items-center gap-2 text-xs font-medium text-ink-400 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-200 transition-colors duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						eghos-techviews
					</a>
					<span class="w-px h-4 bg-ink-200 dark:bg-ink-700" aria-hidden="true"></span>
					<span class="text-xs font-mono text-ink-400 dark:text-ink-500 flex items-center gap-1.5">
						<span class="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
						Open to frontend roles
					</span>
				</div>
			</div>

			<!-- Right: Terminal -->
			<div
				class="transition-all duration-600 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay:300ms"
			>
				<Terminal />
				<p class="mt-3 text-xs font-mono text-ink-400 dark:text-ink-600 text-center">
					type <code class="text-brand-500">help</code> to see what's in here
				</p>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
			<span class="text-[10px] tracking-[0.25em] uppercase font-medium text-ink-300 dark:text-ink-600">scroll</span>
			<div class="w-px h-10 bg-gradient-to-b from-brand-400 to-transparent opacity-60"></div>
		</div>
	</div>
</section>
