import { Target, Eye, Lightbulb, Globe } from 'lucide-react';

export function About() {
	const values = [
		{
			icon: Target,
			title: 'Missão',
			description:
				'Promover a inclusão social e a autonomia de pessoas com deficiência visual por meio de programas de educação e capacitação profissional', 
		},
		{
			icon: Eye,
			title: 'Visão',
			description:
				'Construir uma sociedade mais justa e igualitária, onde a acessibilidade e a autonomia sejam a base para o desenvolvimento pleno das pessoas com deficiência visual.',
		},
		{
			icon: Lightbulb,
			title: 'Inovação',
			description:
				'Desenvolver métodos criativos para superar barreiras, tornando o aprendizado e a vida social mais leves e acessíveis.',
		},
		{
			icon: Globe,
			title: 'Impacto',
			description:
				'Provar, com cada conquista, que a inclusão plena é possível, transformando vidas e comunidades ao espalhar conscientização e fortalecer laços.',
		}
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
						Fundada em 2013, a Associação dos Morcegos nasceu da
						necessidade de criar um espaço de acolhimento e desenvolvimento
						para pessoas com deficiência visual. Nossa organização,
						que se estabeleceu legalmente em Ubajara, busca transformar
						vidas através da inclusão e autonomia.
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
								A Associação foi fundada em Sobral em 23 de agosto de 2013, 
								com o objetivo de promover a educação e a autonomia para 
								pessoas com deficiência visual. Em fevereiro de 2014, 
								a secretaria de educação de Sobral disponibilizou uma 
								sala, onde iniciaram as primeiras aulas para um grupo
								de 15 alunos, composto por crianças e adultos.
							</p>
							<p>
								Ainda em 2014, a associação foi transferida para o município
								de Ubajara a convite dos líderes comunitários Maria de Fátima 
								do Nascimento e Manoel Carlos Ramos. Com o apoio de parceiros 
								locais, a Associação divulgou seu projeto e realizou uma Assembleia 
								Geral na Casa da Cultura, mobilizando toda a comunidade. A partir de 
							    janeiro de 2015, a organização passou a funcionar legalmente.
							</p>
							<p>
								A associação busca transformar as vidas das pessoas com deficiência 
								visual de todas as idades, atendendo às suas necessidades de autonomia 
								para uma vida independente. Com o projeto "Independência para Cegos", 
								a Associação dos Morcegos se tornou um agente incorporado ao desenvolvimento 
								do estado do Ceará, destacando-se pela expansão da Educação Inclusiva.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
