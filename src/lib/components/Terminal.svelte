<script lang="ts">
	type Line =
		| { type: 'command'; text: string }
		| { type: 'output'; text: string }
		| { type: 'blank' };

	const SEQUENCE: { cmd: string; output: string[] }[] = [
		{
			cmd: 'cat story.txt',
			output: [
				'QA tester by trade. Found bugs for a living.',
				'Then I got tired of knowing what breaks',
				'without being able to build it better.',
				'So I started building.'
			]
		},
		{
			cmd: 'cat current.txt',
			output: [
				'HNG internship  →  React + Next.js (in the deep end)',
				'Angular         →  my first real grip on the DOM',
				'SvelteKit       →  built this portfolio with it',
				'Goal: understand systems, not just use them'
			]
		},
		{
			cmd: 'ls projects/',
			output: ['SysMonitor/    E2EMessaging/    HabitTracker/']
		},
		{
			cmd: 'cat philosophy.txt',
			output: [
				'UI should tell a story.',
				'It should pull you in — not just look clean.',
				'Low effort is disrespect to the person using it.',
				'I build things I would actually want to use.'
			]
		},
		{
			cmd: 'echo $status',
			output: ["open to frontend roles. let's build something worth using."]
		}
	];

	const KNOWN_COMMANDS: Record<string, string[]> = {
		help: [
			'commands:',
			'  cat story.txt       — how I got here',
			'  cat current.txt     — what I\'m learning',
			'  ls projects/        — things I\'ve built',
			'  cat philosophy.txt  — how I think about UI',
			'  echo $status        — availability',
			'  clear               — reset'
		],
		clear: []
	};

	type Line_t = Line;
	let lines = $state<Line_t[]>([]);
	let inputValue = $state('');
	let isPlaying = $state(false);
	let isReady = $state(false);

	function sleep(ms: number) {
		return new Promise<void>((r) => setTimeout(r, ms));
	}

	async function typeCommand(cmd: string) {
		const line: Line_t = { type: 'command', text: '' };
		lines = [...lines, line];
		for (const ch of cmd) {
			line.text += ch;
			lines = [...lines];
			await sleep(38 + Math.random() * 28);
		}
	}

	async function playSequence() {
		isPlaying = true;
		await sleep(700);
		for (const step of SEQUENCE) {
			await typeCommand(step.cmd);
			await sleep(220);
			for (const out of step.output) {
				lines = [...lines, { type: 'output', text: out }];
				await sleep(55);
			}
			lines = [...lines, { type: 'blank' }];
			await sleep(400);
		}
		isPlaying = false;
		isReady = true;
	}

	function handleInput(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;
		const cmd = inputValue.trim().toLowerCase();
		if (!cmd) return;

		lines = [...lines, { type: 'command', text: cmd }];

		if (cmd === 'clear') {
			lines = [];
		} else if (KNOWN_COMMANDS[cmd]) {
			for (const l of KNOWN_COMMANDS[cmd]) {
				lines = [...lines, { type: 'output', text: l }];
			}
			lines = [...lines, { type: 'blank' }];
		} else {
			const found = SEQUENCE.find((s) => s.cmd === cmd);
			if (found) {
				for (const l of found.output) {
					lines = [...lines, { type: 'output', text: l }];
				}
			} else {
				lines = [
					...lines,
					{ type: 'output', text: `command not found: ${cmd}` },
					{ type: 'output', text: 'type "help" to see what\'s available' }
				];
			}
			lines = [...lines, { type: 'blank' }];
		}

		inputValue = '';
		requestAnimationFrame(() => {
			const el = document.getElementById('term-scroll');
			if (el) el.scrollTop = el.scrollHeight;
		});
	}

	$effect(() => {
		playSequence();
	});

	$effect(() => {
		if (lines.length) {
			requestAnimationFrame(() => {
				const el = document.getElementById('term-scroll');
				if (el) el.scrollTop = el.scrollHeight;
			});
		}
	});
</script>

<div class="terminal-window font-mono text-sm" role="region" aria-label="Interactive terminal">
	<div class="terminal-bar select-none">
		<span class="w-3 h-3 rounded-full bg-red-400/80" aria-hidden="true"></span>
		<span class="w-3 h-3 rounded-full bg-yellow-400/80" aria-hidden="true"></span>
		<span class="w-3 h-3 rounded-full bg-green-400/80" aria-hidden="true"></span>
		<span class="ml-auto text-[11px] text-ink-400 dark:text-ink-600 tracking-wide">techviews — zsh</span>
	</div>

	<div
		id="term-scroll"
		class="terminal-body overflow-y-auto"
		style="min-height:240px; max-height:340px;"
		aria-live="polite"
		aria-atomic="false"
	>
		{#each lines as line, i (i)}
			{#if line.type === 'blank'}
				<div class="h-2" aria-hidden="true"></div>
			{:else if line.type === 'command'}
				<div class="flex items-start gap-2 leading-relaxed">
					<span class="text-brand-500 dark:text-brand-400 shrink-0 select-none">~</span>
					<span class="text-ink-400 dark:text-ink-500 shrink-0 select-none">$</span>
					<span class="text-ink-800 dark:text-cream-200 break-all">{line.text}</span>
					{#if i === lines.length - 1 && isPlaying}
						<span class="inline-block w-[7px] h-[14px] bg-brand-400 opacity-90 animate-blink" aria-hidden="true"></span>
					{/if}
				</div>
			{:else}
				<div class="pl-7 text-ink-500 dark:text-ink-400 leading-relaxed whitespace-pre">{line.text}</div>
			{/if}
		{/each}

		{#if isReady}
			<div class="flex items-center gap-2 mt-1">
				<span class="text-brand-500 dark:text-brand-400 shrink-0 select-none">~</span>
				<span class="text-ink-400 dark:text-ink-500 shrink-0 select-none">$</span>
				<input
					bind:value={inputValue}
					onkeydown={handleInput}
					type="text"
					autocomplete="off"
					spellcheck="false"
					aria-label="Terminal input"
					placeholder="type a command..."
					class="flex-1 bg-transparent text-ink-800 dark:text-cream-200 outline-none
						placeholder:text-ink-300 dark:placeholder:text-ink-700 min-w-0"
				/>
			</div>
		{/if}
	</div>
</div>
