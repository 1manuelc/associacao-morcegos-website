import { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { ThemeToggle } from '../fragments/ThemeToggle';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ name: 'Início', href: '#home' },
		{ name: 'Sobre Nós', href: '#about' },
		{ name: 'Atividades', href: '#activities' },
		{ name: 'Impacto', href: '#impact' },
		{ name: 'Contato', href: '#contact' },
	];

	return (
		<header className='bg-white dark:bg-dark-800 shadow-sm sticky top-0 z-50 transition-colors duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<div className='flex items-center space-x-3'>
						<div className='bg-primary-800 dark:bg-primary-600 p-2 rounded-lg'>
							<Eye className='w-6 h-6 text-white' />
						</div>
						<div>
							<h1 className='font-bold text-base text-gray-900 dark:text-white'>
								Associação dos Morcegos
							</h1>
							<p className='hidden lg:flex text-xs text-gray-600 dark:text-gray-400'>
								Incluindo através da acessibilidade
							</p>
						</div>
					</div>

					{/* Desktop Navigation and Theme Toggle */}
					<div className='hidden md:flex items-center justify-center space-x-6'>
						<nav className='flex justify-between gap-3 items-center'>
							{menuItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
								>
									{item.name}
								</a>
							))}
						</nav>
						<ThemeToggle />
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<div className='flex items-center space-x-2'>
							<ThemeToggle />
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className='text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 p-2'
								aria-label='Toggle menu'
							>
								{isMenuOpen ? (
									<X className='w-6 h-6' />
								) : (
									<Menu className='w-6 h-6' />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700'>
							{menuItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700 block px-3 py-2 text-base font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
