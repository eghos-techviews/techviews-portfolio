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
					subject: subject || 'New message from Tech Views portfolio',
					message
				})
			});
			const data = await res.json();
			if (data.success) {
				status = 'success';
				name = '';
				email = '';
				subject = '';
				message = '';
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

	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/eghos-techviews',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
			color: 'hover:text-slate-800 dark:hover:text-white'
		},
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
			color: 'hover:text-blue-600'
		},
		{
			label: 'Twitter / X',
			href: 'https://twitter.com',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
			color: 'hover:text-slate-800 dark:hover:text-white'
		}
	];
</script>

<section id="contact" class="py-24 relative overflow-hidden" aria-label="Contact section">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" aria-hidden="true"></div>
	<div class="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<!-- Heading -->
		<div class="mb-16 reveal" data-reveal>
			<p class="text-brand-500 font-mono text-sm font-medium tracking-widest mb-3">GET IN TOUCH</p>
			<h2 class="section-heading">
				Let's <span class="gradient-text">Work Together</span>
			</h2>
			<p class="mt-4 text-slate-500 dark:text-slate-400 max-w-lg">
				Got a project in mind, a position to fill, or just want to say hi? My inbox is always open.
			</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-10">
			<!-- Contact info sidebar -->
			<div class="lg:col-span-2 space-y-6 reveal" data-reveal>
				<!-- Availability card -->
				<div class="glass-card p-6 space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center border border-green-200 dark:border-green-500/20">
							<span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
						</div>
						<div>
							<p class="text-sm font-semibold text-slate-900 dark:text-white">Available for work</p>
							<p class="text-xs text-slate-500 dark:text-slate-400">Open to full-time & freelance</p>
						</div>
					</div>
					<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
						I'm currently open to frontend engineering roles and freelance projects. Response time is usually within 24 hours.
					</p>
				</div>

				<!-- Social links -->
				<div class="glass-card p-6">
					<h3 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">Find me on</h3>
					<div class="flex flex-col gap-3">
						{#each socials as social}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400
									{social.color} transition-colors duration-200 group"
								aria-label="{social.label} profile"
							>
								<span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-brand-500/30 transition-colors duration-200">
									{@html social.icon}
								</span>
								{social.label}
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"><path d="M7 7h10v10M7 17 17 7"/></svg>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact form -->
			<div class="lg:col-span-3 reveal" data-reveal style="transition-delay: 100ms;">
				<div class="glass-card p-8">
					{#if status === 'success'}
						<div class="flex flex-col items-center justify-center py-12 gap-4 text-center">
							<div class="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-green-500" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
							</div>
							<h3 class="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
							<p class="text-slate-500 dark:text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
						</div>
					{:else if status === 'error'}
						<div class="flex flex-col items-center justify-center py-8 gap-3 text-center">
							<div class="w-14 h-14 rounded-full bg-red-50 dark:bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-red-500" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>
							</div>
							<p class="text-sm font-medium text-slate-700 dark:text-slate-300">Something went wrong. Please try again.</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} novalidate aria-label="Contact form" class="space-y-5">
							<div class="grid sm:grid-cols-2 gap-5">
								<div>
									<label for="contact-name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name <span class="text-red-500" aria-hidden="true">*</span></label>
									<input
										id="contact-name"
										type="text"
										bind:value={name}
										required
										autocomplete="name"
										placeholder="Your name"
										class="w-full px-4 py-3 rounded-xl text-sm
											bg-slate-50 dark:bg-white/5
											border border-slate-200 dark:border-white/10
											text-slate-900 dark:text-white
											placeholder:text-slate-400 dark:placeholder:text-slate-500
											focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
											transition-all duration-200"
									/>
								</div>
								<div>
									<label for="contact-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email <span class="text-red-500" aria-hidden="true">*</span></label>
									<input
										id="contact-email"
										type="email"
										bind:value={email}
										required
										autocomplete="email"
										placeholder="you@example.com"
										class="w-full px-4 py-3 rounded-xl text-sm
											bg-slate-50 dark:bg-white/5
											border border-slate-200 dark:border-white/10
											text-slate-900 dark:text-white
											placeholder:text-slate-400 dark:placeholder:text-slate-500
											focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
											transition-all duration-200"
									/>
								</div>
							</div>

							<div>
								<label for="contact-subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
								<input
									id="contact-subject"
									type="text"
									bind:value={subject}
									placeholder="What's this about?"
									class="w-full px-4 py-3 rounded-xl text-sm
										bg-slate-50 dark:bg-white/5
										border border-slate-200 dark:border-white/10
										text-slate-900 dark:text-white
										placeholder:text-slate-400 dark:placeholder:text-slate-500
										focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
										transition-all duration-200"
								/>
							</div>

							<div>
								<label for="contact-message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message <span class="text-red-500" aria-hidden="true">*</span></label>
								<textarea
									id="contact-message"
									bind:value={message}
									required
									rows={5}
									placeholder="Tell me about your project..."
									class="w-full px-4 py-3 rounded-xl text-sm resize-none
										bg-slate-50 dark:bg-white/5
										border border-slate-200 dark:border-white/10
										text-slate-900 dark:text-white
										placeholder:text-slate-400 dark:placeholder:text-slate-500
										focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
										transition-all duration-200"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={status === 'submitting' || !name || !email || !message}
								class="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
								aria-busy={status === 'submitting'}
							>
								{#if status === 'submitting'}
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="animate-spin" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
									Sending...
								{:else}
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
									Send Message
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
