import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Heart,
	DollarSign,
	Users,
	Handshake,
} from 'lucide-react';

export function Contact() {
	const contactInfo = [
		{
			icon: MapPin,
			title: 'Endereço',
			details: ['Sítio Moitinga - Zona Rural', 'Ubajara - CE, 62350-000'],
		},
		{
			icon: Phone,
			title: 'Telefones',
			details: ['(88) 9292-4023'],
		},
		{
			icon: Mail,
			title: 'E-mail',
			details: [
				'contato@associacaomorcegos.org.br',
			],
		},
		{
			icon: Clock,
			title: 'Funcionamento',
			details: ['Segunda a Sexta: 8h às 18h', 'Sábados: 8h às 12h'],
		},
	];

	const waysToChelp = [
		{
			icon: Heart,
			title: 'Voluntariado',
			description: 'Doe seu tempo e conhecimento para impactar vidas',
		},
		{
			icon: DollarSign,
			title: 'Doações',
			description: 'Contribuições financeiras para manter nossos programas',
		},
		{
			icon: Users,
			title: 'Parcerias',
			description: 'Empresas e organizações que querem fazer a diferença',
		},
		{
			icon: Handshake,
			title: 'Divulgação',
			description: 'Ajude a espalhar nossa missão em suas redes',
		},
	];

	return (
		<section
			id='contact'
			className='py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Entre em Contato
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Estamos sempre dispostos a conversar. Entre em contato conosco para
						saber mais sobre nossas oficinas ou como você pode contribuir.
					</p>
				</div>

				<div className='flex gap-12 items-center justify-center'>
					{/* Contact Info & Help Ways */}
					<div className='grid md:grid-cols-2 gap-8'>
						{/* Contact Information */}
						<div className='bg-white dark:bg-dark-700 rounded-xl shadow-sm p-8'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
								Informações de Contato
							</h3>
							<div className='space-y-6'>
								{contactInfo.map((info, index) => {
									const Icon = info.icon;
									return (
										<div key={index} className='flex items-start'>
											<div className='bg-primary-100 dark:bg-primary-900 p-3 rounded-lg mr-4 flex-shrink-0'>
												<Icon className='w-6 h-6 text-primary-800 dark:text-primary-400' />
											</div>
											<div>
												<h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
													{info.title}
												</h4>
												{info.details.map((detail, idx) => (
													<p
														key={idx}
														className='text-gray-600 dark:text-gray-300'
													>
														{detail}
													</p>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Ways to Help */}
						<div className='bg-white dark:bg-dark-700 rounded-xl shadow-sm p-8'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
								Como Você Pode Ajudar
							</h3>
							<div className='space-y-4'>
								{waysToChelp.map((way, index) => {
									const Icon = way.icon;
									return (
										<div
											key={index}
											className='flex items-start p-4 bg-gray-50 dark:bg-dark-800 rounded-lg'
										>
											<Icon className='w-6 h-6 text-accent-500 dark:text-accent-400 mr-3 flex-shrink-0 mt-1' />
											<div>
												<h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
													{way.title}
												</h4>
												<p className='text-gray-600 dark:text-gray-300 text-sm'>
													{way.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
