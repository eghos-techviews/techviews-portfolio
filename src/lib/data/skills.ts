export interface Skill {
	name: string;
	level: number;
	icon: string;
}

export interface SkillCategory {
	label: string;
	emoji: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		label: 'Frontend',
		emoji: '⚡',
		skills: [
			{ name: 'Vue 3', level: 92, icon: '🟢' },
			{ name: 'SvelteKit', level: 85, icon: '🔶' },
			{ name: 'TypeScript', level: 88, icon: '🔷' },
			{ name: 'React', level: 78, icon: '⚛️' },
			{ name: 'JavaScript', level: 95, icon: '🟡' }
		]
	},
	{
		label: 'Styling & Animation',
		emoji: '🎨',
		skills: [
			{ name: 'TailwindCSS', level: 93, icon: '🌊' },
			{ name: 'CSS3 / SCSS', level: 90, icon: '🎨' },
			{ name: 'GSAP', level: 80, icon: '✨' },
			{ name: 'Framer Motion', level: 72, icon: '🎬' }
		]
	},
	{
		label: 'State & Data',
		emoji: '🗄️',
		skills: [
			{ name: 'Pinia', level: 88, icon: '🍍' },
			{ name: 'Zustand', level: 75, icon: '🐻' },
			{ name: 'REST APIs', level: 90, icon: '🔌' },
			{ name: 'WebSockets', level: 80, icon: '🔗' }
		]
	},
	{
		label: 'Tooling',
		emoji: '🛠️',
		skills: [
			{ name: 'Vite', level: 90, icon: '⚡' },
			{ name: 'Git / GitHub', level: 92, icon: '🐙' },
			{ name: 'Vercel', level: 88, icon: '▲' },
			{ name: 'Figma', level: 76, icon: '🖌️' }
		]
	}
];

export const techStack = [
	'Vue 3', 'SvelteKit', 'TypeScript', 'React',
	'TailwindCSS', 'GSAP', 'Pinia', 'Vite',
	'Node.js', 'WebSockets', 'Git', 'Vercel',
	'Figma', 'CSS3', 'JavaScript', 'REST APIs'
];
