<script lang="ts">
	import { projects } from '$lib/data/projects.js';

	const categoryColors: Record<string, string> = {
		Dashboard: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20',
		'Full-Stack': 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20',
		Productivity: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20'
	};
</script>

<section id="projects" class="py-24 relative overflow-hidden" aria-label="Projects showcase">
	<!-- Subtle bg accent -->
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<!-- Heading -->
		<div class="mb-16 reveal" data-reveal>
			<p class="text-brand-500 font-mono text-sm font-medium tracking-widest mb-3">PORTFOLIO</p>
			<div class="flex items-end justify-between gap-4 flex-wrap">
				<h2 class="section-heading">
					Things I've <span class="gradient-text">Built</span>
				</h2>
				<a
					href="https://github.com/eghos-techviews"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 group"
				>
					View all on GitHub
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
				</a>
			</div>
		</div>

		<!-- Project cards -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project, i}
				<article
					class="group glass-card p-6 flex flex-col gap-4
						hover:border-brand-500/30 dark:hover:border-brand-500/30
						hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-brand-500/10
						transition-all duration-300 ease-out reveal"
					data-reveal
					style="transition-delay: {i * 80}ms;"
					aria-label="{project.title} project card"
				>
					<!-- Top row: icon + category -->
					<div class="flex items-start justify-between">
						<div class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center border border-brand-500/20 dark:border-brand-500/30">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500" aria-hidden="true"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
						</div>
						<span class="text-xs font-medium px-2.5 py-1 rounded-full border {categoryColors[project.category] ?? 'bg-slate-100 text-slate-600'}">
							{project.category}
						</span>
					</div>

					<!-- Title + description -->
					<div class="flex-1">
						<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
							{project.title}
						</h3>
						<p class="text-sm font-medium text-brand-500 dark:text-brand-400 mb-3">{project.description}</p>
						<p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
							{project.longDescription}
						</p>
					</div>

					<!-- Tech stack -->
					<div class="flex flex-wrap gap-1.5" aria-label="Technologies used">
						{#each project.tech as t}
							<span class="skill-badge text-xs px-2 py-1">{t}</span>
						{/each}
					</div>

					<!-- Links -->
					<div class="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-600 dark:hover:text-brand-300 transition-colors duration-200 group/link"
							aria-label="View {project.title} live demo"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
							Live Demo
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"><path d="M7 7h10v10M7 17 17 7"/></svg>
						</a>
						<div class="h-3 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true"></div>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200"
							aria-label="View {project.title} source code on GitHub"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
							Source
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
