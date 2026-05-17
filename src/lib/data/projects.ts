export interface Project {
	title: string;
	description: string;
	longDescription: string;
	tech: string[];
	liveUrl: string;
	githubUrl: string;
	featured: boolean;
	category: string;
	index: string;
}

export const projects: Project[] = [
	{
		title: 'SysMonitor',
		description: 'Real-Time Analytics Dashboard',
		longDescription:
			'I wanted to understand how live data actually flows through a UI — not the theory, the real thing. Built this with Vue 3 and ECharts to figure it out. Pinia handles the state, and the charts update without the whole page having a breakdown.',
		tech: ['Vue 3', 'TypeScript', 'Pinia', 'ECharts', 'Vite'],
		liveUrl: 'https://realtime-dashboard-sable.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		featured: true,
		category: 'Dashboard',
		index: '01'
	},
	{
		title: 'E2E Messaging',
		description: 'End-to-End Encrypted Chat',
		longDescription:
			"Privacy in messaging apps gets talked about a lot — I wanted to know how it actually works under the hood. Built this to understand end-to-end encryption in practice. No plain-text messages stored anywhere. The Crypto API is surprisingly interesting once you get into it.",
		tech: ['JavaScript', 'WebSockets', 'Node.js', 'Crypto API', 'CSS3'],
		liveUrl: 'https://e2emessaging.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		featured: true,
		category: 'Full-Stack',
		index: '02'
	},
	{
		title: 'Habit Tracker',
		description: 'Daily Streaks & Progress',
		longDescription:
			'Simple idea — I was trying to build better habits and figured I should build the tool too. The PWA part turned out harder than expected; offline support has a few gotchas. Streak tracking is satisfying to implement. Chart.js for the progress visuals.',
		tech: ['JavaScript', 'CSS3', 'LocalStorage', 'Chart.js', 'PWA'],
		liveUrl: 'https://habit-tracker-5qdf.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		featured: false,
		category: 'Productivity',
		index: '03'
	}
];
