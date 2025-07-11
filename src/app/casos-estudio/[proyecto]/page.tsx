import { getProyectoBySlug, proyectos, Proyecto } from '@/data/proyectos';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import IconWrapper from '@/components/ui/IconWrapper';
import { IconCode, IconTools, IconBulb, IconClock  } from '@tabler/icons-react';

interface ProyectoPageProps {
  params: {
    proyecto: string;
  }
}

export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proyecto: proyecto.slug,
  }));
}

const ProyectoPage = async ({ params }: ProyectoPageProps) => {
  const { proyecto: slugProyecto } = await params;
  console.log("Slug recibido en la URL:", slugProyecto);
  const proyecto = getProyectoBySlug(slugProyecto);
  console.log("Proyecto encontrado:", proyecto);

  if (!proyecto) {
    notFound();
  }

  const {
    title,
    project_description,
    previewUrl,
    challenge,
    solution,
    techs,
    time,
    testimonial_url,
    testimonial_name,
    testimonial_job_title,
    testimonial_text
  } = proyecto;

  return (
    <div className="container mx-auto py-8 px-4 sm:mt-12 max-w-[800px]">

      <div className='grid grid-cols-1 gap-4 md:grid-cols-[auto, auto] md:grid-rows-[auto, auto] md:gap-x-14'>
        <h1 className="text-2xl sm:text-3xl font-extrabold order-1 md:row-[1/2]">{title}</h1>
        <p className="order-3 md:row-[2/3]">{project_description}</p>
        <img src={previewUrl} alt={`Preview del proyecto ${title}`} className="rounded-lg shadow-md w-full h-auto object-cover order-2 md:row-[1/3] md:w-[250px] md:h-[auto] " />
      </div>


      <div className='flex flex-col justify-center mt-8'>
        <div className='flex gap-3'>
          <IconWrapper IconComponent={IconTools} />
          <h2 className="text-2xl font-semibold  mb-3">Desafio</h2>
        </div>
        <p className="">{challenge}</p>
      </div>



      <div className='flex flex-col justify-center mt-8'>
        <div className='flex gap-3'>
          <IconWrapper IconComponent={IconBulb} />
          <h2 className="text-2xl font-semibold  mb-3">Solución</h2>
        </div>
        <p className="" dangerouslySetInnerHTML={{ __html: solution.replace(/\\n/g, '<br />') }}></p>
      </div>


      <div className='flex flex-col sm:flex-row sm:gap-x-20 sm:items-start'>
        <div className='flex flex-col justify-center mt-8'>
          <div className='flex gap-3'>
            <IconWrapper IconComponent={IconCode} />
            <h2 className="text-2xl font-semibold mb-3">Tecnologías</h2>
          </div>
          <ul className="list-disc list-inside ">
            {techs.map((tec, index) => (<li key={index}>{tec}</li>))}
          </ul>
        </div>



        <div className='flex flex-col justify-center mt-8'>
          <div className='flex gap-3'>
            <IconWrapper IconComponent={IconClock} />
            <h2 className="text-2xl font-semibold  mb-3">Tiempo de Desarrollo</h2>
          </div>
          <p className="">{time}</p>
        </div>
      </div>


      {/* Sección de Testimonio */}
      <div className="bg-black border border-coder-green p-6 rounded-3xl mb-8 mt-16">
        <div className="flex items-center mb-4">
          <Image
            src={testimonial_url}
            alt={`Foto de ${testimonial_name}`}
            className="w-16 h-16 rounded-full object-cover mr-4"
            width={64}
            height={64}
          />
          <div>
            <p className="text-lg font-medium text-white">{testimonial_name}</p>
            <p className="text-coder-green text-sm">{testimonial_job_title}</p>
          </div>
        </div>
        <p className=" italic">"{testimonial_text}"</p>
      </div>
    </div>
  );
}

export default ProyectoPage;