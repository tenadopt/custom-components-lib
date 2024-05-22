import React, { forwardRef } from 'react';
import styles from './BaseInput.module.scss';
import classNames from 'classnames/bind';

export interface BaseInputProps extends React.ComponentProps<'input'> {
    /**Input variant*/
    variant: 'filled' | 'outlined' | 'standard';
    /**Input label*/
    label: string;
    /**Input error*/
    error: boolean;
}

const cx = classNames.bind(styles);

const BaseInput = forwardRef<HTMLInputElement, Partial<BaseInputProps>>(
    ({ id, className, label, variant = 'standart', error, disabled, children, ...props }, ref) => {
        const baseInputStyle = cx('input', className, variant, { error, disabled });

        return (
            <div className={`${styles.containerInput}`}>
                <input
                    id={id}
                    className={baseInputStyle}
                    placeholder=" "
                    error={error}
                    disabled={disabled}
                    ref={ref}
                    {...props}
                    readOnly
                />
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
                {children}
            </div>
        );
    },
);

export default BaseInput;
