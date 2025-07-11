interface CardMarcasProps {
  image?: string;
  alt?: string;
  description: string;
}

export default function CardMarcas({ image, alt, description }: CardMarcasProps) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center w-full min-h-full '>
      <div className='bg-[#16191D] flex justify-center items-center rounded-lg w-full max-w-[385px] h-[164px] sm:max-w-[280px]'>
        <img
          src={`/images/${image}`}
          alt={alt || 'Imagen de marca'}
          className='max-w-[160px] h-auto '
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-center'>{description}</p>
        <a href="#" className='text-white text-base text-center hover:text-coder-green'>Ver caso de estudio →</a>
      </div>
    </div>

  );
}