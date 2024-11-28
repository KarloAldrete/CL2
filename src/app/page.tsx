import CardDesc from '@/components/ui/CardDesc';
import CardMarcas from '@/components/ui/CardMarcas';
import { CardPrimary } from '@/components/ui/CardPrimary';
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (


    <div className='container px-4 xl:px-0 mx-auto max-w-7xl'>

      {/* --- Header --- */}
      <div className="overflow-x-hidden grid grid-cols-[1fr_1fr_1fr_300px] sm:grid-cols-[1fr_1fr_1fr_400px] grid-rows-3 gap-0 relative h-[800px] overflow-hidden box-border">

        {/* --- Hero --- */}
        <div className='flex justify-between items-center border-red-500  col-[1/5] col-row-[1/2] z-50 absolute top-0 w-full mt-6'>
          <img src="/images/logo-coderlabs.svg" alt="Coderlabs" className='' />
          <a href="#" className='py-2 px-6 bg-[#17FF9F] rounded-md text-black'>Contacto</a>
        </div>

        <div className='flex flex-col justify-center items-start col-[1/5] sm:col-[1/4] row-[2/3] self-center'>
          <h1 className="sm:text-3xl md:text-5xl lg:text-6xl text-left z-10 mb-2 sm:mr-[-200px] xl:mr-0">Construir un sitio web espectacular no es sencillo</h1>
          <span className='text-[#009D5B] sm:text-2xl md:text-3xl lg:text-4xl z-10 text-left '>Coderlabs lo hace posible</span>
        </div>

        <div className='bg-[radial-gradient(50%_50%_at_50%_50%,#0E1719_31.83%,#000000_100%)] w-[90%] h-[72px] col-[1/4] row-[3/4] z-40  self-center' />

        {/* --- Hero Background --- */}
        <div className="col-[1/5] row-[1/4] flex justify-center items-center">
          <Spline
            scene="https://prod.spline.design/rJemImKtQgFVPSnd/scene.splinecode"
            className='max-w-[1280px] max-h-[800px] border-red-500 '
          />
        </div>

        {/* --- Tank --- */}
        <Spline
          scene="https://prod.spline.design/YaxlkwFH2Gdcs9Jc/scene.splinecode"
          className="min-w-[320px] h-auto absolute z-0 border-red-500 col-[4/5] row-[1/4] box-border"
        />

      </div>

      {/*  --- Section Trabaja con nosotros ---  */}
      <section>

        <h2 className='text-center mt-16'>Trabaja con nosotros</h2>

        <div className='flex gap-6 flex-wrap md:flex-nowrap md:gap-10 justify-center items-center mt-16'>
          <CardDesc
            title='¿Qué es Coderlabs?'
            description='Coderlabs es una empresa que construye sitios web de alta calidad para empresas de todos tamaños.'
            imageUrl='/images/icon-users.svg'
            imageAlt='Coderlabs'
          />
          <CardDesc
            title='Comunicación clara'
            description='En CoderLabs respondemos rápido, analizamos cada detalle y para asegurar total transparencia.'
            imageUrl='/images/icon-msgs.svg'
            imageAlt='Coderlabs'
          />
        </div>


      </section>

      {/*  --- Section Desarrollo ---  */}
      <section className='w-full mt-24'>

        <h2 className='text-center col-[1/4] sm:col-span-2'>Nuestro proceso de desarrollo</h2>

        <div className='flex flex-col w-full sm:grid sm:grid-cols-2 sm:grid-rows-3 md:grid-rows-2 lg:grid-cols-3 justify-center items-center gap-5 mt-12'>
          <CardPrimary
            title='Investigación'
            description='Analizamos tu empresa para entender su esencia y crear un producto a la medida'
            image='/images/card-investigacion.svg'
          />

          <CardPrimary
            title='Dirección Visual'
            description='Potenciamos tu marca con colores y diseños que conecten con tus usuarios'
            image='/images/card-visual.svg'
            bgStyle='diamond'
          />

          <CardPrimary
            title='Diseño de Interfaz'
            description='Creamos un sistema de diseño claro y detallado para cada pagina'
            image='/images/card-diseno.svg'
          />

          <CardPrimary
            title='Desarrollo'
            description='Implementamos la tecnología ideal para que tu sitio web sea rápido y seguro'
            image='/images/card-desarrollo.svg'
            bgStyle='diamond'
          />

          <CardPrimary
            title='Lanzamiento'
            description='Configuramos el hosting y CI/CD para un lanzamiento sin problemas'
            image='/images/card-lanzamiento.svg'
            bgStyle='circle'
          />

          <CardPrimary
            title='Mantenimiento'
            description='Seguimos optimizando tu sitio para asegurar su funcionamiento continuo'
            image='/images/card-mantenimiento.svg'
            bgStyle='diamond'
          />
        </div>
      </section>

      {/*  --- Section Inteligencia Artificial ---  */}
      <section className='w-full mt-24'>
        <h2 className='text-center'>Inteligencia Artificial para Negocios</h2>
        <div className='bg-[#0E1116] flex flex-col justify-center items-center gap-5 py-8 px-10 rounded-2xl my-16'>
          <span className='text-xl text-[#6C8B9D] text-center'>¿Tienes dudas sobre cómo la IA puede transformar tu negocio? ¡Pregúntame ahora!</span>
          <a href="#" className='px-4 py-2 bg-white rounded-md text-black text-xl font-bold'>Consulta con nuestra IA</a>
        </div>
      </section>

      {/*  --- Section Marcas ---  */}
      <section className='flex flex-col gap-2 justify-center items-center my-40 rounded-2xl'>
        <h2 className='text-center'>Marcas con las que hemos colaborado</h2>

        <div className='grid grid-cols-1 grid-rows-[fit_fit] gap-2 h-fit rounded-2xl w-fit overflow-hidden'>
          <div className='grid gap-2 grid-cols-2 sm:grid-cols-4 h-fit'>
            <CardMarcas
              image='/images/logo-barralates.svg'
              alt='Barralates Fitness'
            />
            <CardMarcas
              image='/images/logo-patio.svg'
              alt='Patio Inmobiliario'
            />
            <CardMarcas
              image='/images/logo-priority.svg'
              alt='Priority'
            />
            <CardMarcas
              image='/images/logo-mythica.svg'
              alt='Mythica'
            />
          </div>

          <div className='grid gap-2 grid-cols-1 sm:grid-cols-3'>
            <CardMarcas
              image='/images/logo-nexa.svg'
              alt='Nexa Enlaces'
            />
            <CardMarcas
              image='/images/logo-shoe.svg'
              alt='Shoe Shine'
            />
            <CardMarcas
              image='/images/logo-quasar.svg'
              alt='Quasar'
            />
          </div>
        </div>

      </section>


    </div>
  );
}

