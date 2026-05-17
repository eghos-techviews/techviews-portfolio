export interface SkillGroup {
	label: string;
	note: string;
	skills: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		label: 'Grounded in',
		note: 'Things I reach for without thinking twice',
		skills: ['Angular', 'TypeScript', 'HTML & CSS', 'TailwindCSS', 'Git']
	},
	{
		label: 'Getting sharp in',
		note: 'Active learning — React/Next.js through HNG, SvelteKit on personal builds',
		skills: ['React', 'Next.js', 'SvelteKit', 'Vue 3', 'Pinia']
	},
	{
		label: 'Use daily',
		note: 'The rest of the toolkit',
		skills: ['Vite', 'Vercel', 'Figma', 'VS Code', 'REST APIs', 'WebSockets']
	},
	{
		label: 'Background in',
		note: 'QA — where I actually started',
		skills: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Edge Case Thinking']
	}
];
