import React, {FC} from 'react';

export interface BaseButtonProps {
    children: React.ReactNode;
    color: string;
}

const BaseButton: FC<BaseButtonProps> = ({
                                                 children,
                                                 color,
                                                 ...props
                                             }) => {
    return (
        <button {...props} style={{color}}>
            {children}
        </button>
    );
}

export default BaseButton;
