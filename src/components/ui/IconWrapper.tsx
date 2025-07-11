// src/components/ui/IconWrapper.tsx
import { type Icon } from '@tabler/icons-react';

interface IconWrapperProps {
    IconComponent: Icon;
}

const IconWrapper = ({ IconComponent }: IconWrapperProps) => {
    return (
        <div className='flex justify-center items-center w-14 h-7 rounded-[28px] border border-coder-green'>
            <IconComponent className='w-5 h-auto' color='white' />
        </div>
    );
};

export default IconWrapper;