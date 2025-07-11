import CardDesarrollo from "../ui/CardDesarrollo"

const ProcesoSection = () => {
  return (
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
  )
}

export default ProcesoSection