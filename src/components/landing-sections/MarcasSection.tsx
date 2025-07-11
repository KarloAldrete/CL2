import CardMarcas from "../ui/CardMarcas"

const MarcasSection = () => {
  return (
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
  )
}

export default MarcasSection