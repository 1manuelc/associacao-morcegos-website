import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainLogo } from '../MainLogo';
import horizontal_logo from '../../assets/logo/horizontal.svg';
import vertical_logo from '../../assets/logo/vertical.svg';
import icon_logo from '../../assets/logo/icon.svg';

describe('MainLogo', () => {
	it('renderiza a logo horizontal quando variant="horizontal"', () => {
		render(<MainLogo variant='horizontal' />);
		const img = screen.getByRole('img', {
			name: /logo associação morcegos em ação/i,
		});
		expect(img).toHaveAttribute('src', horizontal_logo);
	});

	it('renderiza a logo vertical quando variant="vertical"', () => {
		render(<MainLogo variant='vertical' />);
		const img = screen.getByRole('img', {
			name: /logo associação morcegos em ação/i,
		});
		expect(img).toHaveAttribute('src', vertical_logo);
	});

	it('renderiza a logo de ícone quando variant="icon"', () => {
		render(<MainLogo variant='icon' />);
		const img = screen.getByRole('img', {
			name: /logo associação morcegos em ação/i,
		});
		expect(img).toHaveAttribute('src', icon_logo);
	});

	it('usa "icon" como variante padrão quando não informado', () => {
		render(<MainLogo />);
		const img = screen.getByRole('img', {
			name: /logo associação morcegos em ação/i,
		});
		expect(img).toHaveAttribute('src', icon_logo);
	});

	it('passa props extras para o elemento img', () => {
		render(
			<MainLogo variant='horizontal' className='test-class' width={200} />
		);
		const img = screen.getByRole('img');
		expect(img).toHaveClass('test-class');
		expect(img).toHaveAttribute('width', '200');
	});
});
