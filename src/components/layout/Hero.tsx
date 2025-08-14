import { ArrowRight, Heart, Users } from 'lucide-react';

export function Hero() {
	return (
		<section
			id='home'
			className='bg-gradient-to-b from-zinc-100 to-primary-100 dark:from-zinc-900 dark:to-zinc-800 py-12 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
								Transformando Vidas Através da
								<span className='text-primary-700 dark:text-primary-400 block'>
									Inclusão e Acessibilidade
								</span>
							</h1>
							<p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
								A Associação dos Morcegos trabalha incansavelmente para promover
								a inclusão social de pessoas com deficiência visual, oferecendo
								apoio, educação e oportunidades para uma vida plena e
								independente.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4'>
							<a
								href='#about'
								className='bg-primary-700 dark:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center group'
							>
								Conheça Nosso Trabalho
								<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
							</a>
							<a
								href='#contact'
								className='bg-transparent underline text-primary-800 dark:text-primary-400 px-8 py-4 rounded-lg font-semibold hover:no-underline transition-colors duration-200 flex items-center justify-center'
							>
								Como Ajudar?
							</a>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-2 gap-8 mt-12'>
							<div className='text-center'>
								<div className='flex items-center justify-center mb-2'>
									<Users className='w-8 h-8 text-primary-800 dark:text-primary-400' />
								</div>
								<div className='text-3xl font-bold text-gray-900 dark:text-white'>
									500+
								</div>
								<div className='text-gray-600 dark:text-gray-400'>
									Pessoas Atendidas
								</div>
							</div>
							<div className='text-center'>
								<div className='flex items-center justify-center mb-2'>
									<Heart className='w-8 h-8 text-accent-600 dark:text-accent-400' />
								</div>
								<div className='text-3xl font-bold text-gray-900 dark:text-white'>
									15
								</div>
								<div className='text-gray-600 dark:text-gray-400'>
									Anos de Experiência
								</div>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className='relative'>
						<div className='aspect-w-4 aspect-h-3'>
							<img
								src='https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800'
								alt='Pessoa com deficiência visual usando tecnologia assistiva'
								className='w-full h-96 object-cover rounded-2xl shadow-2xl'
							/>
						</div>
						<div className='absolute -bottom-6 -left-6 bg-accent-500 dark:bg-accent-600 text-white p-6 rounded-xl shadow-lg'>
							<div className='text-2xl font-bold'>Juntos</div>
							<div className='text-sm'>Construindo Futuro</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
