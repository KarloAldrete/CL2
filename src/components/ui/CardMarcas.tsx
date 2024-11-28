interface CardMarcasProps {
  image: string;
  alt: string;
}

export default function CardMarcas({ image, alt }: CardMarcasProps) {
  return (
    <div className="bg-[#080A0C] hover:bg-[#0E1116] transition-all duration-300 w-full min-w-[150px] min-h-full flex justify-center items-center px-5 py-10 ">
      <img src={image} alt={alt} />
    </div>
  );
}