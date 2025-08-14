import { ComponentProps } from 'react';
import horizontal_logo from '../assets/logo/horizontal.svg';
import vertical_logo from '../assets/logo/vertical.svg';
import icon_logo from '../assets/logo/icon.svg';

type MainLogoProps = ComponentProps<'img'> & {
	variant?: 'horizontal' | 'vertical' | 'icon';
};

const getLogo = (variant: 'horizontal' | 'vertical' | 'icon') => {
	switch (variant) {
		case 'horizontal':
			return horizontal_logo;
		case 'vertical':
			return vertical_logo;
		case 'icon':
			return icon_logo;
	}
};

export function MainLogo({ variant = 'icon', ...props }: MainLogoProps) {
	const logo = getLogo(variant);

	return (
		<img
			{...props}
			src={logo}
			height={87}
			alt='Logo Associação Morcegos em Ação'
		/>
	);
}
