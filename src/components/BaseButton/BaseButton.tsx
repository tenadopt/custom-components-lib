import React, { ComponentProps } from 'react';
import styles from '../BaseButton/BaseButton.module.scss';
import cnBind from 'classnames/bind';

export interface BaseButtonProps extends ComponentProps<'button'> {
    /** Button variant */
    variant: 'text' | 'contained' | 'outlined';
    /** Button size */
    size: 'small' | 'medium' | 'large';
}

const cx = cnBind.bind(styles);

/** Custom Button Component */
const BaseButton = ({ className, variant, size, children, ...props }: Partial<BaseButtonProps>) => {
    const btn = cx('button', className, variant, size);

    return (
        <button type="button" className={btn} {...props}>
            {children}
        </button>
    );
};

export default BaseButton;
