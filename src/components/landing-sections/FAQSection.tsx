import FAQAccordion from "../ui/FAQAccordion"

const FAQSection = () => {
  return (
    <section className='w-full max-w-[1100px] mx-auto show' id='preguntas-frecuentes'>
    <h2 className='text-center'>Preguntas Frecuentes</h2>
    <FAQAccordion
      items={[
        {
          question: '¿Qué tipo de software desarrollan en CoderLabs?',
          answer: 'Nos especializamos en desarrollo de software web a medida: plataformas internas, dashboards, automatizaciones, chatbots, e integraciones con sistemas existentes.',
        },
        {
          question: '¿Trabajan con inteligencia artificial?',
          answer: 'Sí. Implementamos soluciones con IA para automatizar procesos, crear asistentes inteligentes, analizar datos y optimizar operaciones empresariales.',
        },
        {
          question: '¿Puedo contratar para un proyecto pequeño o un sitio simple?',
          answer: 'Claro, también realizamos sitios informativos o de presentación, con enfoque profesional, responsivo y orientado a conversión.',
        },
        {
          question: '¿Cuánto tiempo tarda un proyecto promedio?',
          answer: 'Depende mucho del tipo de proyecto. Una pagina puede tomar de 1 a 3 semanas. Un sistema personalizado entre 1 y 3 meses. Siempre damos una estimación clara antes de comenzar.',
        },
        {
          question: '¿Cómo se realiza el pago por los servicios?',
          answer: 'Ofrecemos pagos por fases, según el avance del proyecto. También adaptamos el esquema según el tamaño y duración del desarrollo.',
        }
      ]}
    />
  </section>
  )
}

export default FAQSection