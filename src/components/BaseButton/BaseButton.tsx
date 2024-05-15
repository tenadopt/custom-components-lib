import React, { FC, ComponentProps } from 'react';
import styles from '../BaseButton/BaseButton.module.scss';

export interface BaseButtonProps extends ComponentProps<'button'> {
    variant?: 'text' | 'contained' | 'outlined';
    color?: string;
    size?: 'small' | 'medium' | 'large';
}

const BaseButton: FC<BaseButtonProps> = ({ variant, color, size, ...props }) => {
    const sizeClass = size ? styles[size] : '';
    const variantClass = variant ? styles[variant] : '';
    const disabledClass = props.disabled ? styles.disabled : '';
    const className = `${styles.button} ${sizeClass} ${variantClass} ${disabledClass}`;

    return (
        <button type="button" className={className} style={{ color }} {...props}>
            {props.children}
        </button>
    );
};

export default BaseButton;
