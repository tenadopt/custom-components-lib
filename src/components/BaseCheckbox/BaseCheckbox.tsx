import React from 'react';
import styles from './BaseCheckbox.module.scss';
import cnBind from 'classnames/bind';

export interface BaseCheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    disabled: boolean;
}

const cx = cnBind.bind(styles);

const BaseCheckbox = ({
    className,
    label,
    checked,
    onChange,
    disabled,
    ...props
}: Partial<BaseCheckboxProps>) => {
    const checkboxClasses = cx('base-checkbox', {
        checked,
        disabled,
    });
    const inputClasses = cx('checkbox-input', className);
    const labelClasses = cx('checkbox-label', {
        checked,
        disabled,
    });

    return (
        <label className={checkboxClasses}>
            <input
                type="checkbox"
                className={inputClasses}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            <span className={labelClasses}>{label}</span>
        </label>
    );
};

export default BaseCheckbox;
