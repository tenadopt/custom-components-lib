import React, {FC} from 'react';

export interface BaseInputProps {
    children: React.ReactNode;
    placeholder: string;
}

export const BaseInput: FC<BaseInputProps> = ({children,
                                                  placeholder,
                                                  ...props
                                              }) => {
    return (
        <label>
            {children}
            <input placeholder={placeholder} {...props}/>
        </label>
    );
};