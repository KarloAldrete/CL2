
interface CardDescProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const CardDesc = ({ title, description, imageUrl, imageAlt }: CardDescProps) => {
    return (
        <div className='flex flex-row items-center justify-center gap-5 min-w-[320px] w-full max-w-[500px]'>
            <img src={imageUrl} alt={imageAlt} className='w-10 md:w-auto' />
            <div className="flex flex-col">
                <span className="text-xl font-bold">{title}</span>
                <span className="text-[#6C8B9D]">{description}</span>
            </div>
        </div>
    );
};

export default CardDesc