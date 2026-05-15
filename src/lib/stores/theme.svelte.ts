const STORAGE_KEY = 'tv-theme';

function createTheme() {
	let isDark = $state(false);

	return {
		get isDark() {
			return isDark;
		},
		init() {
			if (typeof window === 'undefined') return;
			const saved = localStorage.getItem(STORAGE_KEY);
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = saved === 'dark' || (!saved && prefersDark);
			this.apply();
		},
		toggle() {
			isDark = !isDark;
			if (typeof window !== 'undefined') {
				localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
			}
			this.apply();
		},
		apply() {
			if (typeof document === 'undefined') return;
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	};
}

export const theme = createTheme();
