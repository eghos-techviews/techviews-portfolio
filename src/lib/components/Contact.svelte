<script lang="ts">
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!name || !email || !message) return;
		status = 'submitting';
		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: 'f78fc30b-f8d0-4613-a89d-79018f8e6f30',
					name,
					email,
					subject: subject || 'Message from the portfolio',
					message
				})
			});
			const data = await res.json();
			if (data.success) {
				status = 'success';
				name = ''; email = ''; subject = ''; message = '';
				setTimeout(() => (status = 'idle'), 6000);
			} else {
				status = 'error';
				setTimeout(() => (status = 'idle'), 4000);
			}
		} catch {
			status = 'error';
			setTimeout(() => (status = 'idle'), 4000);
		}
	}
</script>

<section id="contact" class="py-24 relative" aria-label="Contact">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-5 sm:px-8">

		<div class="mb-14 reveal" data-reveal>
			<p class="section-label mb-3">Contact</p>
			<h2 class="display-heading text-4xl sm:text-5xl mb-4">
				Let's talk
			</h2>
			<p class="body-text max-w-md text-sm">
				If you have a role, a project, or just want to connect — send me a message. I check my inbox regularly and I actually reply.
			</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-10">

			<!-- Sidebar -->
			<div class="lg:col-span-2 space-y-5 reveal" data-reveal>
				<div class="card p-6">
					<p class="text-xs font-mono text-ink-400 dark:text-ink-600 mb-4 uppercase tracking-widest">Right now</p>
					<p class="text-sm font-medium text-ink-900 dark:text-cream-100 mb-1 flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-green-500 shrink-0" aria-hidden="true"></span>
						QA tester by day, building at night
					</p>
					<p class="text-sm body-text mt-3 leading-relaxed">
						Actively looking for frontend roles. Open to junior positions, internships, and freelance work. I'm early — but I'm serious about it.
					</p>
				</div>

				<div class="card p-6">
					<p class="text-xs font-mono text-ink-400 dark:text-ink-600 mb-4 uppercase tracking-widest">Find me</p>
					<div class="space-y-3">
						<a
							href="https://github.com/eghos-techviews"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-3 text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream-100 transition-colors duration-200 group"
							aria-label="GitHub profile"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
							github.com/eghos-techviews
						</a>
					</div>
				</div>
			</div>

			<!-- Form -->
			<div class="lg:col-span-3 reveal" data-reveal style="transition-delay:100ms">
				<div class="card p-7 sm:p-8">
					{#if status === 'success'}
						<div class="flex flex-col items-center justify-center py-10 gap-4 text-center">
							<div class="text-3xl" aria-hidden="true">✓</div>
							<h3 class="font-serif font-bold text-xl text-ink-900 dark:text-cream-100">Got it — thanks.</h3>
							<p class="text-sm body-text">I'll get back to you within a day or two.</p>
						</div>
					{:else if status === 'error'}
						<div class="flex flex-col items-center justify-center py-8 gap-3 text-center">
							<p class="text-sm body-text">Something went wrong. Try again or email me directly.</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} novalidate aria-label="Contact form" class="space-y-5">
							<div class="grid sm:grid-cols-2 gap-5">
								<div>
									<label for="cn" class="block text-xs font-medium text-ink-600 dark:text-ink-400 mb-1.5 uppercase tracking-wide">Name <span class="text-brand-500" aria-hidden="true">*</span></label>
									<input id="cn" type="text" bind:value={name} required autocomplete="name" placeholder="Your name"
										class="w-full px-4 py-3 rounded-xl text-sm
											bg-cream-50 dark:bg-ink-900/50
											border border-cream-300 dark:border-ink-700
											text-ink-900 dark:text-cream-100
											placeholder:text-ink-300 dark:placeholder:text-ink-700
											focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30
											transition-all duration-200" />
								</div>
								<div>
									<label for="ce" class="block text-xs font-medium text-ink-600 dark:text-ink-400 mb-1.5 uppercase tracking-wide">Email <span class="text-brand-500" aria-hidden="true">*</span></label>
									<input id="ce" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com"
										class="w-full px-4 py-3 rounded-xl text-sm
											bg-cream-50 dark:bg-ink-900/50
											border border-cream-300 dark:border-ink-700
											text-ink-900 dark:text-cream-100
											placeholder:text-ink-300 dark:placeholder:text-ink-700
											focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30
											transition-all duration-200" />
								</div>
							</div>

							<div>
								<label for="cs" class="block text-xs font-medium text-ink-600 dark:text-ink-400 mb-1.5 uppercase tracking-wide">Subject</label>
								<input id="cs" type="text" bind:value={subject} placeholder="What's this about?"
									class="w-full px-4 py-3 rounded-xl text-sm
										bg-cream-50 dark:bg-ink-900/50
										border border-cream-300 dark:border-ink-700
										text-ink-900 dark:text-cream-100
										placeholder:text-ink-300 dark:placeholder:text-ink-700
										focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30
										transition-all duration-200" />
							</div>

							<div>
								<label for="cm" class="block text-xs font-medium text-ink-600 dark:text-ink-400 mb-1.5 uppercase tracking-wide">Message <span class="text-brand-500" aria-hidden="true">*</span></label>
								<textarea id="cm" bind:value={message} required rows={5} placeholder="Tell me what you're working on..."
									class="w-full px-4 py-3 rounded-xl text-sm resize-none
										bg-cream-50 dark:bg-ink-900/50
										border border-cream-300 dark:border-ink-700
										text-ink-900 dark:text-cream-100
										placeholder:text-ink-300 dark:placeholder:text-ink-700
										focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30
										transition-all duration-200"></textarea>
							</div>

							<button
								type="submit"
								disabled={status === 'submitting' || !name || !email || !message}
								class="w-full btn-primary justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
								aria-busy={status === 'submitting'}
							>
								{status === 'submitting' ? 'Sending...' : 'Send message'}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
