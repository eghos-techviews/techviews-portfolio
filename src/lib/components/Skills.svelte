<script lang="ts">
	import { skillCategories, techStack } from '$lib/data/skills.js';

	let visibleBars = $state(false);
	let sectionRef = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!sectionRef) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visibleBars = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section id="skills" bind:this={sectionRef} class="py-24 relative bg-slate-50/60 dark:bg-[#080d1b]/60" aria-label="Skills section">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" aria-hidden="true"></div>
	<div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<!-- Heading -->
		<div class="mb-16 reveal" data-reveal>
			<p class="text-accent-500 font-mono text-sm font-medium tracking-widest mb-3">EXPERTISE</p>
			<h2 class="section-heading">
				Skills & <span class="gradient-text">Tech Stack</span>
			</h2>
			<p class="mt-4 text-slate-500 dark:text-slate-400 max-w-lg">
				Tools and technologies I work with daily to build polished, high-performance products.
			</p>
		</div>

		<!-- Skill categories grid -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
			{#each skillCategories as cat, ci}
				<div
					class="glass-card p-6 reveal"
					data-reveal
					style="transition-delay: {ci * 80}ms;"
				>
					<h3 class="font-semibold text-sm text-slate-900 dark:text-white mb-4 flex items-center gap-2">
						<span aria-hidden="true">{cat.emoji}</span>
						{cat.label}
					</h3>
					<ul class="space-y-3" role="list">
						{#each cat.skills as skill}
							<li>
								<div class="flex justify-between text-xs mb-1.5">
									<span class="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
										<span aria-hidden="true">{skill.icon}</span>
										{skill.name}
									</span>
									<span class="text-slate-400 dark:text-slate-500">{skill.level}%</span>
								</div>
								<div class="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label="{skill.name} proficiency {skill.level}%">
									<div
										class="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-700 ease-out"
										style="width: {visibleBars ? skill.level : 0}%; transition-delay: {ci * 80 + 200}ms;"
									></div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Tech cloud -->
		<div class="reveal" data-reveal>
			<p class="text-center text-xs font-mono tracking-widest text-slate-400 dark:text-slate-500 mb-6 uppercase">Full tech radar</p>
			<div class="flex flex-wrap justify-center gap-2" aria-label="All technologies">
				{#each techStack as tech, i}
					<span
						class="skill-badge hover:scale-105 transition-transform duration-200 cursor-default"
						style="animation-delay: {i * 30}ms;"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
