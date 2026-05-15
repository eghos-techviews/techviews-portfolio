<script lang="ts">
	type Line =
		| { type: 'command'; text: string }
		| { type: 'output'; text: string }
		| { type: 'blank' };

	const SEQUENCE: { cmd: string; output: string[] }[] = [
		{
			cmd: 'whoami',
			output: ['Tech Views  —  Frontend Developer', 'Location: Nigeria  |  Open to remote']
		},
		{
			cmd: 'cat about.txt',
			output: [
				'Passionate about high-performance UIs,',
				'developer tooling, and clean architecture.',
				'Specialising in Vue 3, SvelteKit & TypeScript.'
			]
		},
		{
			cmd: 'ls projects/',
			output: ['SysMonitor/    E2EMessaging/    HabitTracker/']
		},
		{
			cmd: 'cat skills.json',
			output: [
				'{',
				'  "frontend":  ["Vue 3", "Svelte", "TypeScript"],',
				'  "styling":   ["TailwindCSS", "CSS3", "GSAP"],',
				'  "state":     ["Pinia", "Zustand"],',
				'  "tools":     ["Vite", "Git", "Vercel", "Figma"]',
				'}'
			]
		},
		{
			cmd: 'cat contact.json',
			output: [
				'{',
				'  "github":       "eghos-techviews",',
				'  "open_to_work": true,',
				'  "status":       "Available for projects"',
				'}'
			]
		}
	];

	let lines = $state<Line[]>([]);
	let inputValue = $state('');
	let showCursor = $state(true);
	let isPlaying = $state(false);
	let isReady = $state(false);
	let inputRef = $state<HTMLInputElement | null>(null);

	const KNOWN_COMMANDS: Record<string, string[]> = {
		help: [
			'Available commands:',
			'  whoami       — about me',
			'  cat about.txt',
			'  ls projects/',
			'  cat skills.json',
			'  cat contact.json',
			'  clear        — reset terminal'
		],
		clear: []
	};

	function sleep(ms: number) {
		return new Promise<void>((r) => setTimeout(r, ms));
	}

	async function typeCommand(cmd: string) {
		const cmdLine: Line = { type: 'command', text: '' };
		lines = [...lines, cmdLine];
		for (const ch of cmd) {
			cmdLine.text += ch;
			lines = [...lines];
			await sleep(40 + Math.random() * 30);
		}
	}

	async function playSequence() {
		isPlaying = true;
		await sleep(600);
		for (const step of SEQUENCE) {
			await typeCommand(step.cmd);
			await sleep(250);
			for (const out of step.output) {
				lines = [...lines, { type: 'output', text: out }];
				await sleep(60);
			}
			lines = [...lines, { type: 'blank' }];
			await sleep(350);
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
					{ type: 'output', text: `bash: ${cmd}: command not found` },
					{ type: 'output', text: 'Type "help" to see available commands.' }
				];
			}
			lines = [...lines, { type: 'blank' }];
		}
		inputValue = '';
		requestAnimationFrame(() => {
			const el = document.getElementById('terminal-scroll');
			if (el) el.scrollTop = el.scrollHeight;
		});
	}

	$effect(() => {
		const interval = setInterval(() => (showCursor = !showCursor), 500);
		playSequence();
		return () => clearInterval(interval);
	});

	$effect(() => {
		if (lines.length) {
			requestAnimationFrame(() => {
				const el = document.getElementById('terminal-scroll');
				if (el) el.scrollTop = el.scrollHeight;
			});
		}
	});
</script>

<div class="terminal-window font-mono text-sm" role="region" aria-label="Interactive terminal">
	<div class="terminal-bar select-none">
		<span class="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></span>
		<span class="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true"></span>
		<span class="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></span>
		<span class="ml-auto text-xs text-slate-400 dark:text-slate-500 tracking-wide">techviews — terminal</span>
	</div>

	<div
		id="terminal-scroll"
		class="terminal-body overflow-y-auto"
		style="max-height: 320px;"
		aria-live="polite"
		aria-atomic="false"
	>
		{#each lines as line, i (i)}
			{#if line.type === 'blank'}
				<div class="h-2" aria-hidden="true"></div>
			{:else if line.type === 'command'}
				<div class="flex items-start gap-2">
					<span class="text-brand-400 shrink-0 select-none" aria-hidden="true">$</span>
					<span class="text-slate-800 dark:text-slate-100 break-all">{line.text}</span>
					{#if i === lines.length - 1 && isPlaying}
						<span class="inline-block w-[8px] h-[15px] bg-brand-400 opacity-80 {showCursor ? '' : 'opacity-0'} transition-opacity" aria-hidden="true"></span>
					{/if}
				</div>
			{:else}
				<div class="pl-4 text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre">{line.text}</div>
			{/if}
		{/each}

		{#if isReady}
			<div class="flex items-center gap-2 mt-1">
				<span class="text-brand-400 shrink-0 select-none" aria-hidden="true">$</span>
				<input
					bind:this={inputRef}
					bind:value={inputValue}
					onkeydown={handleInput}
					type="text"
					autocomplete="off"
					spellcheck="false"
					aria-label="Terminal input"
					placeholder="type a command..."
					class="flex-1 bg-transparent text-slate-800 dark:text-slate-100 outline-none
						placeholder:text-slate-300 dark:placeholder:text-slate-600 min-w-0"
				/>
			</div>
		{/if}
	</div>
</div>
