import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/theme/useTheme';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors duration-200'
			aria-label={`Alternar para tema ${
				theme === 'light' ? 'escuro' : 'claro'
			}`}
		>
			{theme === 'light' ? (
				<Moon className='w-5 h-5 text-zinc-700 dark:text-zinc-300' />
			) : (
				<Sun className='w-5 h-5 text-zinc-700 dark:text-zinc-300' />
			)}
		</button>
	);
}
