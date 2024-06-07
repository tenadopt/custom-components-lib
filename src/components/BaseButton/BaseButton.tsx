import React, { ComponentProps } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cnBind from 'classnames/bind';
import styles from './BaseButton.module.scss';

export interface BaseButtonProps extends ComponentProps<'button'> {
    /** Button variant */
    variant: 'text' | 'contained' | 'outlined';
    /** Button size */
    size: 'small' | 'medium' | 'large';
}

const cx = cnBind.bind(styles);

/** Custom Button Component */
function BaseButton({ className, variant, size, children, ...props }: BaseButtonProps) {
    const btnClasses = cx('button', className, variant, size);

    return (
        <button type="button" className={btnClasses} {...props}>
            {children}
        </button>
    );
}

export default BaseButton;
