<script lang="ts">
	import { skillGroups } from '$lib/data/skills.js';
</script>

<section id="skills" class="py-24 bg-cream-100/60 dark:bg-[#0b0907]/60 relative" aria-label="Skills">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" aria-hidden="true"></div>
	<div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-5 sm:px-8">

		<div class="mb-14 reveal" data-reveal>
			<p class="section-label mb-3">Skills</p>
			<h2 class="display-heading text-4xl sm:text-5xl mb-4">
				What I'm working<br/>with
			</h2>
			<p class="body-text max-w-md text-sm">
				No percentages — those don't mean anything. Here's an honest picture of where I am.
			</p>
		</div>

		<div class="grid sm:grid-cols-2 gap-5">
			{#each skillGroups as group, i}
				<div
					class="card p-7 reveal"
					data-reveal
					style="transition-delay:{i * 70}ms"
				>
					<div class="mb-4">
						<h3 class="font-semibold text-base text-ink-900 dark:text-cream-100 mb-1">{group.label}</h3>
						<p class="text-xs body-text">{group.note}</p>
					</div>
					<div class="flex flex-wrap gap-2" aria-label="{group.label} skills">
						{#each group.skills as skill}
							<span class="skill-pill">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Honest note -->
		<div class="mt-10 reveal" data-reveal>
			<p class="text-xs font-mono text-ink-400 dark:text-ink-600 text-center max-w-md mx-auto leading-relaxed">
				I'm early in this and I know it. The goal isn't to look senior — it's to actually get there. Every project I ship is one step closer.
			</p>
		</div>
	</div>
</section>
