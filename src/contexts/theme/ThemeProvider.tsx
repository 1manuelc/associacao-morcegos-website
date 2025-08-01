import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		// Check if there's a saved preference
		const savedTheme = localStorage.getItem('theme') as Theme;
		if (savedTheme) {
			return savedTheme;
		}

		// Check system preference
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark';
		}

		return 'light';
	});

	useEffect(() => {
		// Apply theme to document
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);

		// Save to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => {
			// Only update if user hasn't manually set a preference
			if (!localStorage.getItem('theme')) {
				setTheme(e.matches ? 'dark' : 'light');
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
