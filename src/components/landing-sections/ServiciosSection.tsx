import { IconAi, IconBrain, IconCode, IconMessage } from "@tabler/icons-react"
import CardServicios from "../ui/CardServicios"

const ServiciosSection = () => {
  return (
    <section className='max-w-[1100px] mx-auto' id="servicios">
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
  )
}

export default ServiciosSection