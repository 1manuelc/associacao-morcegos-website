import {
	Eye,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from 'lucide-react';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'Início', href: '#home' },
		{ name: 'Sobre Nós', href: '#about' },
		{ name: 'Atividades', href: '#activities' },
		{ name: 'Impacto', href: '#impact' },
		{ name: 'Contato', href: '#contact' },
	];

	const services = [
		'Alfabetização em Braille e Matemática',
		'Mobilidade Urbana',
		'Forró no Escuro',
		'Oficinas de Música',
		'Massoterapia',
		'Muay Thai',
		'Culinária no Escuro'
	];

	return (
		<footer className='bg-zinc-900 dark:bg-zinc-900 text-white transition-colors duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Logo and Description */}
					<div className='lg:col-span-1'>
						<div className='flex items-center space-x-3 mb-6'>
							<div className='bg-primary-600 dark:bg-primary-500 p-2 rounded-lg'>
								<Eye className='w-6 h-6 text-white' />
							</div>
							<div>
								<h3 className='font-bold text-lg'>Associação dos Morcegos</h3>
								<p className='text-sm text-zinc-400 dark:text-zinc-500'>
									Incluindo através da acessibilidade
								</p>
							</div>
						</div>
						<p className='text-gray-300 dark:text-gray-400 mb-6 leading-relaxed'>
							A Associação busca ser um agente definitivo incorporando a comunidade no mapa do desenvolvimento do Estado do Ceará, destacando a expansão de Educação Inclusiva através deste projeto.
						</p>
						<div className='flex space-x-4'>
							<a
							target='blank'
								href='https://www.instagram.com/associacao_morcegos?igsh=MTE5Y2Y4OTNtbnBldg=='
								className='bg-gray-800 dark:bg-dark-800 p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-dark-700 transition-colors duration-200'
							>
								<Instagram className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='font-semibold text-lg mb-6'>Links Rápidos</h4>
						<ul className='space-y-3'>
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className='text-zinc-300 dark:text-zinc-400 hover:text-white transition-colors duration-200'
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className='font-semibold text-lg mb-6'>Nossas Oficinas</h4>
						<ul className='space-y-3'>
							{services.map((service, index) => (
								<li key={index} className='text-zinc-300 dark:text-zinc-400'>
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className='font-semibold text-lg mb-6'>Contato</h4>
						<div className='space-y-4'>
							<div className='flex items-start'>
								<MapPin className='w-5 h-5 text-zinc-400 dark:text-zinc-500 mr-3 mt-1 flex-shrink-0' />
								<div>
									<p className='text-gray-300 dark:text-gray-400'>
										Sítio Moitinga
									</p>
									<p className='text-gray-300 dark:text-gray-400'>
										Ubajara - CE, 62350-000
									</p>
								</div>
							</div>
							<div className='flex items-center'>
								<Phone className='w-5 h-5 text-zinc-400 dark:text-zinc-500 mr-3' />
								<p className='text-zinc-300 dark:text-zinc-400'>
									(11) 3456-7890
								</p>
							</div>
							<div className='flex items-center'>
								<Mail className='w-5 h-5 text-zinc-400 dark:text-zinc-500 mr-3' />
								<p className='text-zinc-300 dark:text-zinc-400'>
									contato@associacaomorcegos.org.br
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-zinc-800 dark:border-zinc-700 mt-12 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-zinc-400 dark:text-zinc-500 mb-4 md:mb-0'>
							© {currentYear} Associação dos Morcegos. Todos os direitos
							reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
