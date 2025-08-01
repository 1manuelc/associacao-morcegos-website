import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { ThemeToggle } from '../ThemeToggle';

const user = userEvent.setup();

describe('ThemeToggle', () => {
	const matchMediaMock = (matches: boolean) => {
		return vi.fn().mockImplementation((query) => ({
			matches,
			media: query,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
		}));
	};

	beforeEach(() => {
		localStorage.clear();
		document.documentElement.className = '';
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	it('deve renderizar o ícone da lua (🌙) se o tema for "light"', async () => {
		localStorage.setItem('theme', 'light');
		window.matchMedia = matchMediaMock(false);

		render(
			<ThemeProvider>
				<ThemeToggle />
			</ThemeProvider>
		);

		// Verifica se ícone da lua está presente
		expect(
			screen.getByLabelText(/alternar para tema escuro/i)
		).toBeInTheDocument();
		expect(document.documentElement.classList.contains('light')).toBe(true);
	});

	it('deve renderizar o ícone do sol (🌞) se o tema for "dark"', async () => {
		localStorage.setItem('theme', 'dark');
		window.matchMedia = matchMediaMock(true);

		render(
			<ThemeProvider>
				<ThemeToggle />
			</ThemeProvider>
		);

		expect(
			screen.getByLabelText(/alternar para tema claro/i)
		).toBeInTheDocument();
		expect(document.documentElement.classList.contains('dark')).toBe(true);
	});

	it('deve alternar entre os temas ao clicar no botão', async () => {
		localStorage.setItem('theme', 'light');
		window.matchMedia = matchMediaMock(false);

		render(
			<ThemeProvider>
				<ThemeToggle />
			</ThemeProvider>
		);

		const button = screen.getByRole('button');

		// Clica e verifica que mudou para dark
		await user.click(button);
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(localStorage.getItem('theme')).toBe('dark');
		expect(button).toHaveAttribute('aria-label', 'Alternar para tema claro');

		// Clica e verifica que voltou para light
		await user.click(button);
		expect(document.documentElement.classList.contains('light')).toBe(true);
		expect(localStorage.getItem('theme')).toBe('light');
		expect(button).toHaveAttribute('aria-label', 'Alternar para tema escuro');
	});
});
