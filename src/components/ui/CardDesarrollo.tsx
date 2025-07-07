interface CardDesarrollo {
    number: string;
    title: string;
    description: string;
    GridPositionNumber: string;
    GridPositionText: string;
}

const CardDesarrollo = ({number, title, description, GridPositionNumber, GridPositionText}: CardDesarrollo) => {
    return (
        <>
            <div className={`flex justify-center items-center w-[72px] h-9 rounded-[28px] border border-coder-green bg-black ${GridPositionNumber}`}>
                <span className='text-xl text-white'>{number}</span>
            </div>
            <div className={`flex flex-col ${GridPositionText}`}>
                <h3>{title}</h3>
                <p className='sm:max-w-[280px]'>{description}</p>
            </div>
        </>
    )
}

export default CardDesarrollo