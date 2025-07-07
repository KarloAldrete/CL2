import CardServicios from '@/components/ui/CardServicios';
import CardMarcas from '@/components/ui/CardMarcas';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ui/ContactForm';
import Hero from '@/components/Hero';
import CardDesarrollo from '@/components/ui/CardDesarrollo';
import Header from '@/components/Header';
import { IconCode, IconAi, IconMessage, IconBrain } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='container px-4 xl:px-0 mx-auto max-w-7x overflow-hidden'>

      <div
        className="absolute w-full h-[400px] top-[-250px] transform -translate-x-1/2 z-[-1] sm:w-[600px] sm:h-[600px] sm:top-[-350px] md:w-[750px] md:h-[750px] md:top-[-620px]"
        style={{
          left: 'calc(50% + 0.5px)',
          background: 'radial-gradient(50% 50% at 50% 50%, #17FF9F 0%, #000000 100%)',
          filter: 'blur(280px)',
        }}
      />

      {/* --- Header Menu --- */}
      <Header />

      {/* --- Main Hero --- */}
      <Hero />


      {/*  --- Section Trabaja con nosotros ---  */}
      <section className='max-w-[1100px] mx-auto'>
        
        <h2 className='text-center '>Nuestros Servicios</h2>

        <div className='flex gap-6 flex-wrap justify-center items-center md:gap-10 px-4 sm:px-0'>

          <CardServicios
            title='Desarrollo de aplicaciones web'
            description='Creamos plataformas, sistemas internos y soluciones digitales 100% personalizadas para tu negocio.'
            iconName={IconCode}
          />
          <CardServicios
            title='Soluciones con inteligencia artificial'
            description='En CoderLabs respondemos rápido, analizamos cada detalle y para asegurar total transparencia.'
            iconName={IconAi}
          />
          <CardServicios
            title='Chatbots y automatizaciones'
            description='Diseñamos asistentes inteligentes que responden, captan leads o automatizan tareas repetitivas.'
            iconName={IconMessage}
          />
          <CardServicios
            title='Asesoría tecnológica para empresas'
            description='Te guiamos en la adopción de herramientas digitales y estrategias para escalar tu operación con tecnología.'
            iconName={IconBrain}
          />

        </div>
      </section>

      {/*  --- Section Desarrollo ---  */}
      <section className='w-full max-w-[1100px] mx-auto'>

        <h2 className='text-center'>Nuestro proceso de desarrollo</h2>

        <div className='
          grid grid-cols-[auto, auto] grid-rows-[3] justify-center items-center gap-x-5 gap-y-5 
          sm:grid-cols-[auto, auto, auto] sm:grid-rows-[auto, auto] sm:gap-x-6 sm:gap-y-4 sm:place-items-center sm:text-center px-4 sm:px-0'>

          <CardDesarrollo
            number='1'
            title='Propuesta'
            description='Te mostramos cómo podemos resolver tu problema, paso a paso.'
            GridPositionNumber='col-[1/2] row-[1/2]'
            GridPositionText='col-[2/3] row-[1/2] sm:col-[1/2] sm:row-[2/3]'
          />

          <CardDesarrollo
            number='2'
            title='Desarrollo'
            description='Diseñamos y programamos tu proyecto, validamos en cada fase.'
            GridPositionNumber='col-[1/2] row-[2/3] sm:col-[2/3] sm:row-[1/2]'
            GridPositionText='col-[2/3] row-[2/3] sm:col-[2/3] sm:row-[2/3]'
          />
          <CardDesarrollo
            number='3'
            title='Lanzamiento'
            description='Publicamos tu proyecto y te acompañamos en el arranque.'
            GridPositionNumber='col-[1/2] row-[3/4] sm:col-[3/4] sm:row-[1/2]'
            GridPositionText='col-[2/3] row-[3/4] sm:col-[3/4] sm:row-[2/3]'
          />

          <div id='line' className="bg-coder-green w-[2px] h-[70%] col-[1/2] row-[1/4] justify-self-center z-[-1] sm:row-[1/2] sm:col-[1/4] sm:w-[70%] sm:h-[1px]" />
        </div>
      </section>

      {/*  --- Section Marcas ---  */}
      <section className='flex flex-col gap-2 justify-center items-center rounded-2xl max-w-[1100px] mx-auto'>
        <h2 className='text-center'>Marcas con las que hemos colaborado</h2>

        <div className='flex flex-col gap-10 w-full px-4 sm:flex-row sm:px-0 sm:justify-between sm:w-auto '>

          <CardMarcas
            image='logo-quasar.svg'
            alt='Coderlabs'
            description='Plataforma de pagos para usuarios'
          />
          <CardMarcas
            image='logo-barralates.svg'
            alt='BarraLates'
            description='Plataforma de pagos para usuarios'
          />
          <CardMarcas
            image='logo-priority.svg'
            alt='Coderlabs'
            description='Plataforma de pagos para usuarios'
          />
        </div>
      </section>


      {/*  --- Section Inteligencia Artificial ---  */}
      <section className='w-full max-w-[1100px] mx-auto'>
        <h2 className='text-center'>Inteligencia Artificial para Negocios</h2>

        <div className='
          relative overflow-visible grid grid-cols-1 grid-rows-[repeat(7,auto)] place-items-center gap-y-6 
          md:grid-cols-[auto,auto,auto] md:grid-rows-3 justify-center items-center md:gap-x-6 md:h-[300px] md:gap-y-0
        '>

          <img src="/images/ia-cpu.svg" alt="" className='w-[60%] max-w-[240px] row-[4/5] mx-auto my-9 md:col-[2/3] md:row-[1/4] md:max-w-[320px] md:w-full' />
          <img src="/images/ia-bg.svg" alt="" className='absolute row-[4/5] z-[-1] md:col-[2/3] md:row-[1/4] min-w-[578px] min-h-[578px]' />

          <h4 className='max-w-[290px] row-[1/2] text-center md:col-[1/2] md:row-[1/2] md:text-left md:text-xl lg:text-xl'><span className='text-coder-green'>Automatizar respuestas</span> a clientes y solicitudes comunes</h4>
          <h4 className='max-w-[290px] row-[2/3] text-center md:col-[1/2] md:row-[2/3] md:text-left md:text-xl lg:text-xl'><span className='text-coder-green'>Organizar datos,</span> correos y documentos sin esfuerzo</h4>
          <h4 className='max-w-[290px] row-[3/4] text-center md:col-[1/2] md:row-[3/4] md:text-left md:text-xl lg:text-xl'>Ofrecer <span className='text-coder-green'>atención al cliente 24/7</span> con chatbots inteligentes</h4>

          <h4 className='max-w-[290px] row-[5/6] text-center md:col-[3/4] md:row-[1/2] md:text-right md:text-xl lg:text-xl'><span className='text-coder-green'>Detectar patrones en datos</span> para mejorar tus ventas</h4>
          <h4 className='max-w-[290px] row-[6/7] text-center md:col-[3/4] md:row-[2/3] md:text-right md:text-xl lg:text-xl'><span className='text-coder-green'>Optimizar tareas</span> internas repetitivas</h4>
          <h4 className='max-w-[290px] row-[7/8] text-center md:col-[3/4] md:row-[3/4] md:text-right md:text-xl lg:text-xl'><span className='text-coder-green'>Crear asistentes virtuales</span> personalizados para tu equipo</h4>

        </div>

        <p className='text-center mt-12 text-xl max-w-[860px] mx-auto '>Hoy, incluso las pequeñas empresas pueden aprovechar la IA para automatizar procesos, ahorrar costos y tomar mejores decisiones</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-11'>
          <Button title='Pon a prueba nuestro chatbot' href='#' buttonStyle='solid' />
          <Button title='Agenda una llamada' href='#' buttonStyle='outlined' />
        </div>

      </section>



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

      <section className='w-full'>
        <h2 className='text-center mb-8'>Contacto</h2>
        
        <ContactForm />
      </section>


      <Footer />

    </div>
  );
}