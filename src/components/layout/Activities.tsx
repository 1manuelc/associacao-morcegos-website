import {
  BookOpen,
  Laptop,
  Briefcase,
  Music,
  Coffee,
  Users
} from 'lucide-react';
import braille from '../assets/braille.jpeg';
import musica from '../assets/musica.jpeg';
import forro from '../assets/forro-no-escurp.jpg';
import massoteraria from '../assets/massoterapia-2.jpg';
import muay_thai from '../assets/muai-thay.jpeg';
import mobilidade from '../assets/mobilidade-urbana.jpg';
import culinaria from '../assets/culinaria-no-escuro.jpeg';

export function Activities() {
  const activities = [
    {
      icon: BookOpen,
      title: 'Alfabetização em Braille e Matemática',
      description:
        "Aulas de leitura e escrita em Braille e no computador, além de noções de matemática aplicadas com métodos adaptados para pessoas com deficiência visual.",
      image: braille,
      className: 'md:col-span-1',
    },
    {
      icon: Laptop,
      title: 'Mobilidade Urbana',
      description:
        'Treinamento de orientação e uso da bengala para locomoção segura, com técnicas para se deslocar em ambientes conhecidos e estratégias para explorar novos espaços com autonomia.',
      image:
        mobilidade,
      className: 'md:col-span-2',
    },
    {
      icon: Briefcase,
      title: 'Forró no Escuro',
      description:
        'Atividade descontraída para se movimentar e socializar, dançando forró em um ambiente inclusivo, com condução e interação entre os participantes.',
      image:
        forro,
      className: 'md:col-span-1',
    },
    {
      icon: Music,
      title: 'Oficinas de Música',
      description:
        'Aulas de instrumentos como violão e teclado, canto, estimulando a expressão artística, a sensibilidade musical e o desenvolvimento cognitivo.',
      image:
        musica,
      className: 'md:col-span-1',
    },
    {
      icon: Coffee,
      title: 'Massoterapia',
      description:
        'Sessões voltadas para o bem-estar físico e emocional, proporcionando relaxamento, troca de experiências e acolhimento.',
      image:
        massoteraria,
      className: 'md:col-span-1',
    },
    {
      icon: Users,
      title: 'Muay Thai',
      description: 'Aulas de Muay Thai ministradas por professora voluntária, promovendo condicionamento físico, disciplina e interação social.',
      image:
        muay_thai,
      className: 'md:col-span-2',
    },
    {
      icon: Users,
      title: 'Culinária no Escuro',
      description: 'Atividade adaptada que desenvolve habilidades para manusear utensílios e preparar receitas com segurança, estimulando a autonomia e a criatividade.',
      image:
        culinaria,
      className: 'md:col-span-1',
    }
  ];

  return (
    <section
      id="activities"
      className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Escola Preparatória e Oficinas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Escola Preparatória oferece preparação intensiva para crianças,
            jovens e adultos. Crianças da escola regular participam das
            atividades do projeto no contraturno. Quem já concluiu os estudos ou
            passou pela Educação de Jovens e Adultos pode estudar em período
            integral. Também oferecemos internato para incentivar a vivência
            prática da autonomia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-dark-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${activity.className}`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-800 dark:bg-primary-600 p-2 rounded-lg mr-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-primary-800 dark:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 dark:hover:bg-primary-700 transition-colors duration-200 inline-block"
          >
            Participe de Nossas Atividades
          </a>
        </div>
      </div>
    </section>
  );
}
