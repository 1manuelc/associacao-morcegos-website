import { useState } from 'react';
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
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		type: 'volunteer',
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
		setFormData({
			name: '',
			email: '',
			phone: '',
			message: '',
			type: 'volunteer',
		});
	};

	const contactInfo = [
		{
			icon: MapPin,
			title: 'Endereço',
			details: ['Rua da Inclusão, 123 - Centro', 'São Paulo - SP, 01234-567'],
		},
		{
			icon: Phone,
			title: 'Telefones',
			details: ['(11) 3456-7890', '(11) 99876-5432'],
		},
		{
			icon: Mail,
			title: 'E-mail',
			details: [
				'contato@associacaomorcegos.org.br',
				'voluntarios@associacaomorcegos.org.br',
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
						saber mais sobre nosso trabalho ou como você pode contribuir.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<div className='bg-white dark:bg-dark-700 rounded-xl shadow-sm p-8'>
						<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
							Envie uma Mensagem
						</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										Nome Completo
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-dark-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200'
										placeholder='Seu nome'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										E-mail
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-dark-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200'
										placeholder='seu@email.com'
									/>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='phone'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										Telefone
									</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-dark-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200'
										placeholder='(11) 99999-9999'
									/>
								</div>
								<div>
									<label
										htmlFor='type'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										Interesse em
									</label>
									<select
										id='type'
										name='type'
										value={formData.type}
										onChange={handleChange}
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-dark-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200'
									>
										<option value='volunteer'>Voluntariado</option>
										<option value='donation'>Doações</option>
										<option value='partnership'>Parcerias</option>
										<option value='activities'>
											Participar das Atividades
										</option>
										<option value='other'>Outros</option>
									</select>
								</div>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
								>
									Mensagem
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									rows={5}
									required
									className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-dark-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200'
									placeholder='Conte-nos como podemos ajudar ou como você gostaria de contribuir...'
								></textarea>
							</div>

							<button
								type='submit'
								className='w-full bg-primary-800 dark:bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-900 dark:hover:bg-primary-700 transition-colors duration-200'
							>
								Enviar Mensagem
							</button>
						</form>
					</div>

					{/* Contact Info & Help Ways */}
					<div className='space-y-8'>
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
