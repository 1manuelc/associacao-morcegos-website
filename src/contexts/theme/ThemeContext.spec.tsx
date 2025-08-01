import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './useTheme';
import userEvent from '@testing-library/user-event';

// Componente de teste para acessar o contexto
function TestComponent() {
	const { theme, toggleTheme } = useTheme();
	return (
		<div>
			<span data-testid='theme'>{theme}</span>
			<button onClick={toggleTheme}>Toggle</button>
		</div>
	);
}

describe('ThemeContext - testes unitários', () => {
	const user = userEvent.setup();

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

	it('deve seguir a preferência do sistema se localStorage estiver vazio', async () => {
		window.matchMedia = matchMediaMock(true); // prefere dark mode

		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>
		);

		expect(screen.getByTestId('theme').textContent).toBe('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
	});

	it('deve usar a preferência salva no localStorage, se existir', () => {
		localStorage.setItem('theme', 'light');
		window.matchMedia = matchMediaMock(true);

		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>
		);

		expect(screen.getByTestId('theme').textContent).toBe('light');
		expect(document.documentElement.classList.contains('light')).toBe(true);
	});

	it('deve alternar entre os temas', async () => {
		localStorage.setItem('theme', 'light');
		window.matchMedia = matchMediaMock(false);

		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>
		);

		const button = screen.getByText('Toggle');
		expect(screen.getByTestId('theme').textContent).toBe('light');

		await user.click(button);
		expect(screen.getByTestId('theme').textContent).toBe('dark');
		expect(localStorage.getItem('theme')).toBe('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);

		await user.click(button);
		expect(screen.getByTestId('theme').textContent).toBe('light');
		expect(localStorage.getItem('theme')).toBe('light');
		expect(document.documentElement.classList.contains('light')).toBe(true);
	});

	it('deve lançar um erro se useTheme for usado fora do provider', () => {
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		const Test = () => {
			useTheme(); //fora do provider
			return null;
		};
		expect(() => render(<Test />)).toThrow(
			'useTheme must be used within a ThemeProvider'
		);
		errorSpy.mockRestore();
	});
});
