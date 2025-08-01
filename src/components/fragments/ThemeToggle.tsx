import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200'
			aria-label={`Alternar para tema ${
				theme === 'light' ? 'escuro' : 'claro'
			}`}
		>
			{theme === 'light' ? (
				<Moon className='w-5 h-5 text-gray-700 dark:text-gray-300' />
			) : (
				<Sun className='w-5 h-5 text-gray-700 dark:text-gray-300' />
			)}
		</button>
	);
}
