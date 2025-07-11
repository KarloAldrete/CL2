import { type Icon } from '@tabler/icons-react';
import IconWrapper from './IconWrapper';

interface CardServicios {
    title: string;
    description: string;
    iconName: Icon;
}

const CardServicios = ({ title, description, iconName: IconComponent }: CardServicios) => {
    return (
        <div className='flex flex-col items-start justify-center gap-2 min-w-[220px] w-full md:max-w-[340px] lg:max-w-[430px]'>
            <div className="flex justify-center items-center gap-4">
                <IconWrapper IconComponent={IconComponent} />
                <h3>{title}</h3>
            </div>
            <p className="">{description}</p>
        </div>
    );
};

export default CardServicios;