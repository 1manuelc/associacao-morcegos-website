import { Target, Eye, Lightbulb, Globe } from 'lucide-react';

export function About() {
	const values = [
		{
			icon: Target,
			title: 'Missão',
			description:
				'Promover a inclusão social e a autonomia de pessoas com deficiência visual através de programas educacionais, tecnológicos e de capacitação profissional.',
		},
		{
			icon: Eye,
			title: 'Visão',
			description:
				'Ser reconhecida como referência nacional em inclusão e acessibilidade, criando uma sociedade mais justa e igualitária para todos.',
		},
		{
			icon: Lightbulb,
			title: 'Inovação',
			description:
				'Utilizar tecnologias assistivas e métodos inovadores para superar barreiras e criar novas oportunidades de desenvolvimento.',
		},
		{
			icon: Globe,
			title: 'Impacto',
			description:
				'Transformar não apenas vidas individuais, mas comunidades inteiras, promovendo conscientização e mudança social.',
		},
	];

	return (
		<section
			id='about'
			className='py-20 bg-white dark:bg-dark-900 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Sobre a Associação dos Morcegos
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
						Fundada em 2009, nossa organização nasceu da necessidade de criar um
						espaço de acolhimento e desenvolvimento para pessoas com deficiência
						visual. Inspirados na capacidade única dos morcegos de navegar no
						escuro, acreditamos que todos podem encontrar seu caminho com o
						apoio adequado.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<div
								key={index}
								className='bg-gray-50 dark:bg-dark-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center group'
							>
								<div className='bg-primary-800 dark:bg-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-900 dark:group-hover:bg-primary-700 transition-colors duration-300'>
									<Icon className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
									{value.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
									{value.description}
								</p>
							</div>
						);
					})}
				</div>

				{/* Story Section */}
				<div className='mt-20 grid lg:grid-cols-2 gap-12 items-center'>
					<div>
						<img
							src='https://images.pexels.com/photos/7176326/pexels-photo-7176326.jpeg?auto=compress&cs=tinysrgb&w=800'
							alt='Atividade em grupo da associação'
							className='w-full h-80 object-cover rounded-xl shadow-lg'
						/>
					</div>
					<div className='space-y-6'>
						<h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
							Nossa História
						</h3>
						<div className='space-y-4 text-gray-600 dark:text-gray-300'>
							<p>
								Tudo começou quando um grupo de voluntários percebeu a falta de
								recursos e oportunidades para pessoas com deficiência visual em
								nossa comunidade. Unidos pelo desejo de fazer a diferença,
								criamos a Associação dos Morcegos.
							</p>
							<p>
								O nome foi escolhido em homenagem a esses extraordinários
								animais que, mesmo sem enxergar no escuro, conseguem navegar com
								precisão usando outros sentidos. Esta é a filosofia que guia
								nosso trabalho: desenvolver todas as potencialidades de cada
								pessoa.
							</p>
							<p>
								Hoje, após 15 anos de dedicação, já impactamos mais de 500 vidas
								e continuamos crescendo, sempre com o objetivo de criar uma
								sociedade mais inclusiva e acessível para todos.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
