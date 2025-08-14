import { ArrowRight } from 'lucide-react';
import sinalizacao from '../assets/sinalizacao.jpg';

export function Hero() {
	return (
		<section
			id='home'
			className='bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-dark-800 dark:to-dark-700 py-20 transition-colors duration-300'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
								Morcegos em Ação:
								<span className='text-primary-800 dark:text-primary-400 block'>
									Independência para pessoas com deficiência visual
								</span>
							</h1>
							<p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
								Temos como objetivo facilitar a inclusão de pessoas com deficiência visual no ensino regular, preparando-os com métodos, estratégias e atitudes necessárias para ter sucesso nos estudos e interações sociais.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4'>
							<a
								href='#about'
								className='bg-primary-800 dark:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 dark:hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center group'
							>
								Saiba Mais
								<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
							</a>
							<a
								href='#contact'
								className='bg-white dark:bg-dark-800 text-primary-800 dark:text-primary-400 px-8 py-4 rounded-lg font-semibold border-2 border-primary-800 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors duration-200 flex items-center justify-center'
							>
								Como nos Ajudar
							</a>
						</div>
					</div>

					{/* Image */}
					<div className='relative'>
						<div className='aspect-w-4 aspect-h-3'>
							<img
								src={sinalizacao}
								alt='Pessoa com deficiência visual usando tecnologia assistiva'
								className='w-full h-96 object-cover rounded-2xl shadow-2xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
