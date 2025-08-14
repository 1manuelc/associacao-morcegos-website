export function Depoiments() {
  const testimonials = [
    {
      name: 'Elizabeth Cristina',
      text: 'Estar na Associação é privilégio, amplio meus conhecimentos através das oficinas e aulas ministradas pelos professores que nos trata com carinho, faço parte do projeto Asas so Saber - Morceguinhos.',
    },
    {
      name: 'Ana Carolina',
      text: 'Gosto das atividades da Associação, tenho independência, aprendi a viver através das orientações, participo com atenção dos conteúdos',
    },

    {
      name: 'Cícero',
      text: 'Venho para a Associação para ampliar meus conhecimentos, já aprendi muito com meus amigos associados.',
    },
  ];

  return (
    <section
      id="depoiments"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="px-10">
        {/* Testimonials */}
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Histórias de Transformação
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Faça Parte Desta Transformação
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Sua contribuição pode fazer a diferença na vida de muitas pessoas.
            Junte-se a nós nesta missão de construir uma sociedade mais
            inclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-500 dark:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 dark:hover:bg-accent-700 transition-colors duration-200"
            >
              Quero Ajudar
            </a>
            <a
              href="#activities"
              className="bg-secondary-600 dark:bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-700 dark:hover:bg-secondary-600 transition-colors duration-200"
            >
              Participar das Atividades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
