import React, { forwardRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames/bind';
import styles from './BaseInput.module.scss';

export interface BaseInputProps extends React.ComponentProps<'input'> {
    /** Label variant */
    label: string;
    /** Input variant */
    variant: 'filled' | 'outlined' | 'standard';
    /** Input label */
    label: string;
    /** Input error */
    error: boolean;
}

const cx = classNames.bind(styles);

const BaseInput = forwardRef<HTMLInputElement, Partial<BaseInputProps>>(
    ({ id, className, label, variant = 'standart', error, disabled, children, ...props }, ref) => {
        const baseInputStyle = cx('input', className, {
            outlined: variant === 'outlined',
            error,
        });

        return (
            <div className={styles.containerInput}>
                <input
                    id={id}
                    className={baseInputStyle}
                    placeholder=" "
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
                {children}
            </div>
        );
    },
);

export default BaseInput;
