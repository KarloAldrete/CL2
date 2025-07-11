import Button from "../ui/Button"

const AIsection = () => {
  return (
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
  )
}

export default AIsection