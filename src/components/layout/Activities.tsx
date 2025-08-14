import {
	BookOpen,
	Laptop,
	Briefcase,
	Music,
	Coffee,
	Users,
	Gamepad2,
	Heart,
} from 'lucide-react';

export function Activities() {
	const activities = [
		{
			icon: BookOpen,
			title: 'Alfabetização em Braille',
			description:
				'Cursos completos de leitura e escrita em Braille para todas as idades',
			image:
				'https://images.pexels.com/photos/6931920/pexels-photo-6931920.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '120+ alunos',
			className: 'md:col-span-2',
		},
		{
			icon: Laptop,
			title: 'Tecnologia Assistiva',
			description:
				'Treinamento em softwares de leitura de tela e ferramentas digitais',
			image:
				'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '80+ participantes',
			className: 'md:col-span-1',
		},
		{
			icon: Briefcase,
			title: 'Capacitação Profissional',
			description:
				'Preparação para o mercado de trabalho e desenvolvimento de habilidades',
			image:
				'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '60+ profissionais',
			className: 'md:col-span-1',
		},
		{
			icon: Music,
			title: 'Oficinas de Música',
			description:
				'Aulas de instrumentos e canto para expressão artística e desenvolvimento cognitivo',
			image:
				'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '45+ músicos',
			className: 'md:col-span-1',
		},
		{
			icon: Coffee,
			title: 'Grupos de Apoio',
			description:
				'Encontros regulares para troca de experiências e suporte emocional',
			image:
				'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '90+ membros',
			className: 'md:col-span-1',
		},
		{
			icon: Users,
			title: 'Orientação e Mobilidade',
			description: 'Técnicas de locomoção segura e independente no dia a dia',
			image:
				'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '70+ pessoas',
			className: 'md:col-span-2',
		},
		{
			icon: Gamepad2,
			title: 'Atividades Recreativas',
			description: 'Jogos adaptados, esportes e atividades de lazer inclusivas',
			image:
				'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '100+ participantes',
			className: 'md:col-span-1',
		},
		{
			icon: Heart,
			title: 'Apoio às Famílias',
			description: 'Orientação e suporte para familiares e cuidadores',
			image:
				'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=500',
			participants: '150+ famílias',
			className: 'md:col-span-1',
		},
	];

	return (
		<section
			id='activities'
			className='py-20 bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-zinc-900 dark:text-white mb-4'>
						Nossas Atividades
					</h2>
					<p className='text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto'>
						Oferecemos uma ampla gama de programas e atividades desenvolvidas
						especificamente para promover autonomia, desenvolvimento pessoal e
						inclusão social.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-6'>
					{activities.map((activity, index) => {
						const Icon = activity.icon;
						return (
							<div
								key={index}
								className={`bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${activity.className}`}
							>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										src={activity.image}
										alt={activity.title}
										className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
									/>
								</div>
								<div className='p-6'>
									<div className='flex items-center mb-4'>
										<div className='bg-primary-800 dark:bg-primary-600 p-2 rounded-lg mr-3'>
											<Icon className='w-5 h-5 text-white' />
										</div>
										<h3 className='text-xl font-semibold text-zinc-900 dark:text-white'>
											{activity.title}
										</h3>
									</div>
									<p className='text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed'>
										{activity.description}
									</p>
									<div className='flex items-center text-sm text-accent-600 dark:text-accent-300 font-medium'>
										<div className='w-2 h-2 bg-accent-600 dark:bg-accent-300 rounded-full mr-2'></div>
										{activity.participants}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className='text-center mt-12'>
					<a
						href='#contact'
						className='bg-primary-800 dark:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 dark:hover:bg-primary-700 transition-colors duration-200 inline-block'
					>
						Participe de Nossas Atividades
					</a>
				</div>
			</div>
		</section>
	);
}
