import React from 'react';
import styles from './BaseInput.module.scss';
import classNames from 'classnames/bind';

export interface BaseInputProps extends React.ComponentProps<'input'> {
    variant: 'filled' | 'outlined' | 'standard';
    label: string;
    error: boolean;
}

const cx = classNames.bind(styles);

const BaseInput = ({
    id,
    className,
    label,
    variant = 'standart',
    error,
    disabled,
    children,
    ...props
}: Partial<BaseInputProps>) => {
    const baseInputStyle = cx('input', className, variant, error, disabled);

    return (
        <div className={`${styles.containerInput}`}>
            <input
                id={id}
                className={baseInputStyle}
                placeholder=""
                error={error}
                disabled={disabled}
                {...props}
            />
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    );
};

export default BaseInput;
