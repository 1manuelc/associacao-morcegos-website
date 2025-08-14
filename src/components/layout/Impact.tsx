import { TrendingUp, Award, Users, Smile } from 'lucide-react';

export function Impact() {
	const stats = [
		{
			icon: Users,
			number: '500+',
			label: 'Pessoas Atendidas',
			description: 'Vidas transformadas através de nossos programas',
		},
		{
			icon: Award,
			number: '85%',
			label: 'Taxa de Sucesso',
			description: 'Dos participantes alcançam seus objetivos',
		},
		{
			icon: TrendingUp,
			number: '200+',
			label: 'Empregos Gerados',
			description: 'Profissionais inseridos no mercado de trabalho',
		},
		{
			icon: Smile,
			number: '15',
			label: 'Anos de Impacto',
			description: 'Dedicados à transformação social',
		},
	];

	const testimonials = [
		{
			name: 'Maria Silva',
			role: 'Participante do Programa de Capacitação',
			text: 'A Associação dos Morcegos me deu muito mais que conhecimento técnico. Me deu confiança para sonhar e realizar. Hoje trabalho como telefonista em uma grande empresa e sou independente.',
			image:
				'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150',
		},
		{
			name: 'João Santos',
			role: 'Ex-aluno de Braille',
			text: 'Aprender Braille foi como ganhar uma nova vida. Posso ler novamente, estudar e me manter atualizado. O carinho e paciência dos professores fizeram toda a diferença.',
			image:
				'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=150',
		},
		{
			name: 'Ana Costa',
			role: 'Mãe de participante',
			text: 'Ver minha filha florescer na Associação não tem preço. Ela desenvolveu autonomia, fez amigos e hoje está cursando faculdade. Somos eternamente gratos.',
			image:
				'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=150',
		},
	];

	return (
		<section
			id='impact'
			className='py-20 bg-white dark:bg-zinc-900 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Nosso Impacto
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Números que representam vidas transformadas e sonhos realizados.
						Cada estatística conta uma história de superação e conquista.
					</p>
				</div>

				{/* Stats Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div key={index} className='text-center'>
								<div className='bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-zinc-700 dark:to-dark-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
									<Icon className='w-10 h-10 text-primary-800 dark:text-primary-400' />
								</div>
								<div className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
									{stat.number}
								</div>
								<div className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
									{stat.label}
								</div>
								<div className='text-gray-600 dark:text-gray-400 text-sm'>
									{stat.description}
								</div>
							</div>
						);
					})}
				</div>

				{/* Testimonials */}
				<div className='bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 md:p-12'>
					<h3 className='text-3xl font-bold text-gray-900 dark:text-white text-center mb-12'>
						Histórias de Transformação
					</h3>
					<div className='grid md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md'
							>
								<div className='flex items-center mb-4'>
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className='w-12 h-12 rounded-full object-cover mr-4'
									/>
									<div>
										<div className='font-semibold text-gray-900 dark:text-white'>
											{testimonial.name}
										</div>
										<div className='text-sm text-gray-600 dark:text-gray-400'>
											{testimonial.role}
										</div>
									</div>
								</div>
								<p className='text-gray-700 dark:text-gray-300 italic leading-relaxed'>
									"{testimonial.text}"
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className='text-center mt-16'>
					<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
						Faça Parte Desta Transformação
					</h3>
					<p className='text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
						Sua contribuição pode fazer a diferença na vida de muitas pessoas.
						Junte-se a nós nesta missão de construir uma sociedade mais
						inclusiva.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='#contact'
							className='bg-primary-700 dark:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors duration-200'
						>
							Quero Participar
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
