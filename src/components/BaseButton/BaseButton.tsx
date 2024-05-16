import React, { FC, ComponentProps } from 'react';
import styles from '../BaseButton/BaseButton.module.scss';
import cnBind from 'classnames/bind';

export interface BaseButtonProps extends ComponentProps<'button'> {
    variant?: 'text' | 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
}

const cx = cnBind.bind(styles);

const BaseButton: FC<BaseButtonProps> = ({ variant, size, ...props }) => {
    const btn = cx('button', props.className, {
        disabled: props.disabled,
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
        text: variant === 'text',
        outlined: variant === 'outlined',
        contained: variant === 'contained',
    });

    return (
        <button
            type="button"
            className={btn}
            disabled={props.disabled}
            onClick={props.onClick}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default BaseButton;
