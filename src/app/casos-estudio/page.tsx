import { proyectos } from '@/data/proyectos';
import Link from 'next/link';

const CasosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-center mb-12 sm:mb-20 mt-10">Nuestros Proyectos</h1>
      <div className="flex flex-col gap-16 w-full max-w-[800px]">

        {proyectos.map((proyecto) => (
          <div key={proyecto.slug} className="
            grid grid-cols-1 grid-rows-[auto, auto, auto, auto] gap-y-3 gap-x-10 items-center gap-0 shadow-md overflow-hidden
            sm:grid-cols-[auto, auto] sm:grid-rows-[auto, auto, auto]">

            <Link href={`/casos-estudio/${proyecto.slug}`} className=' col-[1/2] row-[2/3] sm:col-[2/3] sm:row-[1/4]'>
              <img src={proyecto.previewUrl} alt={`Preview de ${proyecto.title}`} className="min-w-full max-w-[320px] h-auto object-cover rounded-md" />
            </Link>

            <Link href={`/casos-estudio/${proyecto.slug}`} className='col-[1/2] row-[1/2] sm:col-[1/2] sm:row-[1/2]'>
              <h2 className="text-2xl sm:text-3xl font-semibold hover:underline leading-none m-0">{proyecto.title}</h2>
            </Link>
            <p className="col-[1/2] row-[3/4] sm:col-[1/2] sm:row-[2/3]  line-clamp-3">{proyecto.project_description}</p>
            <Link href={`/casos-estudio/${proyecto.slug}`} className='col-[1/2] row-[4/5] sm:col-[1/2] sm:row-[3/4]'>
              <span className="text-lg font-normal text-coder-green mb-2 ">Revisar estudio →</span>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CasosPage