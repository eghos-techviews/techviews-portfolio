export interface Project {
	title: string;
	description: string;
	longDescription: string;
	tech: string[];
	liveUrl: string;
	githubUrl: string;
	image: string;
	featured: boolean;
	category: string;
}

export const projects: Project[] = [
	{
		title: 'SysMonitor',
		description: 'Real-Time Analytics Dashboard',
		longDescription:
			'A high-performance analytics dashboard delivering live system metrics and data visualisations. Built with Vue 3 + Pinia for reactive state management and ECharts for smooth, interactive charts.',
		tech: ['Vue 3', 'TypeScript', 'Pinia', 'ECharts', 'Vite'],
		liveUrl: 'https://realtime-dashboard-sable.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		image: '/images/sysmonitor.png',
		featured: true,
		category: 'Dashboard'
	},
	{
		title: 'E2E Messaging App',
		description: 'Encrypted Real-Time Chat',
		longDescription:
			'A full-stack end-to-end encrypted messaging application with real-time delivery, read receipts, and secure key exchange. Prioritises privacy with zero plain-text message storage.',
		tech: ['JavaScript', 'WebSockets', 'Node.js', 'Crypto API', 'CSS3'],
		liveUrl: 'https://e2emessaging.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		image: '/images/e2e.png',
		featured: true,
		category: 'Full-Stack'
	},
	{
		title: 'Habit Tracker',
		description: 'Daily Progress & Streaks',
		longDescription:
			'A clean habit-building app with streak tracking, progress visualisations, and a motivational system. Fully offline-capable with local persistence and responsive design.',
		tech: ['JavaScript', 'CSS3', 'LocalStorage', 'Chart.js', 'PWA'],
		liveUrl: 'https://habit-tracker-5qdf.vercel.app',
		githubUrl: 'https://github.com/eghos-techviews',
		image: '/images/habit.png',
		featured: false,
		category: 'Productivity'
	}
];
