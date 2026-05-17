<script lang="ts">
	import { projects } from '$lib/data/projects.js';
</script>

<section id="projects" class="py-24 relative" aria-label="Projects">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-5 sm:px-8">

		<div class="mb-14 reveal" data-reveal>
			<p class="section-label mb-3">Work</p>
			<div class="flex items-end justify-between gap-4 flex-wrap">
				<h2 class="display-heading text-4xl sm:text-5xl">
					Things I've<br/>built
				</h2>
				<a
					href="https://github.com/eghos-techviews"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline underline-offset-4 group"
				>
					All on GitHub
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"><path d="M7 7h10v10M7 17 17 7"/></svg>
				</a>
			</div>
		</div>

		<div class="space-y-5">
			{#each projects as project, i}
				<article
					class="card p-7 sm:p-8 group hover:-translate-y-0.5 hover:border-brand-400/40 dark:hover:border-brand-500/30 transition-all duration-300 reveal"
					data-reveal
					style="transition-delay:{i * 80}ms"
					aria-label="{project.title}"
				>
					<div class="flex flex-col sm:flex-row sm:items-start gap-5">
						<!-- Index -->
						<span class="font-mono text-xs text-ink-300 dark:text-ink-700 shrink-0 pt-0.5 select-none">{project.index}</span>

						<!-- Content -->
						<div class="flex-1 min-w-0">
							<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
								<h3 class="font-serif font-bold text-xl text-ink-900 dark:text-cream-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
									{project.title}
								</h3>
								<span class="text-xs font-medium text-ink-400 dark:text-ink-500">— {project.description}</span>
							</div>

							<p class="text-sm body-text leading-relaxed mb-5 max-w-2xl">
								{project.longDescription}
							</p>

							<div class="flex flex-wrap items-center gap-3">
								<div class="flex flex-wrap gap-1.5" aria-label="Tech stack">
									{#each project.tech as t}
										<span class="skill-pill text-xs">{t}</span>
									{/each}
								</div>

								<div class="flex items-center gap-3 sm:ml-auto">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline underline-offset-4"
										aria-label="Live demo of {project.title}"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10M7 17 17 7"/></svg>
										Live
									</a>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="flex items-center gap-1.5 text-xs font-medium text-ink-400 dark:text-ink-500 hover:text-ink-800 dark:hover:text-cream-200 transition-colors duration-200"
										aria-label="Source code for {project.title}"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
										Source
									</a>
								</div>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
