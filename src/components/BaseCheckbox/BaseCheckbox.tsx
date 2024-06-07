import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cnBind from 'classnames/bind';
import styles from './BaseCheckbox.module.scss';

export interface BaseCheckboxProps {
    /** Checkbox label */
    label: string;
    /** Checkbox checked */
    checked: boolean;
    /** Checkbox onChange */
    onChange: () => void;
    /** Checkbox disabled */
    disabled: boolean;
}

const cx = cnBind.bind(styles);

function BaseCheckbox({
    className,
    label,
    checked,
    onChange,
    disabled,
    ...props
}: Partial<BaseCheckboxProps>) {
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
}

export default BaseCheckbox;
