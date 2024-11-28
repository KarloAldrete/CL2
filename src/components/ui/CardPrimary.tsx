interface CardPrimaryProps {
    title: string;
    description: string;
    image: string;
    bgStyle?: 'circle' | 'diamond';
}


export const CardPrimary: React.FC<CardPrimaryProps> = ({ title, description, image, bgStyle = 'circle' }) => {
    const bgClasses = {
        circle: 'bg-[radial-gradient(50%_50%_at_50%_50%,#192733_0%,#060A0D_100%)]',
        diamond: 'bg-[url("/images/card-diamond.png")] bg-center'
    }

    return (
        <div className="bg-[#060A0D] border border-[#162731] rounded-2xl p-1 relative w-full max-w-[500px] grid grid-cols-1 grid-rows-[1fr_auto] h-full mx-auto">
            <div className={`col-[1/2] row-[1/2] ${bgClasses[bgStyle]}`} />
            <img src={image} alt="Investigación" className='w-auto h-auto mx-auto z-10 col-[1/2] row-[1/2]' />
            <div className="rounded-xl bg-gradient-to-t from-[#0E191F] to-[#080E12] py-2 px-3 border border-[#162731] mt-[-20px] z-20">
                <h3 className='text-base font-bold'>{title}</h3>
                <p className='text-sm text-[#49606E]'>{description}</p>
            </div>
        </div>
    )
}


