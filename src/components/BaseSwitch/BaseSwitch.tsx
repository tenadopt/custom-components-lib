import React from 'react';
import styles from './BaseSwitch.module.scss';
import cnBind from 'classnames/bind';

export interface BaseSwitchProps {
    /** Switch checked*/
    checked: boolean;
    /** Switch onChange*/
    onChange: () => void;
    /** Switch disabled*/
    disabled: boolean;
}

const cx = cnBind.bind(styles);

const BaseSwitch = ({
    className,
    checked,
    onChange,
    disabled,
    ...props
}: Partial<BaseSwitchProps>) => {
    const switchClasses = cx('switch', className, { disabled });
    const inputClasses = cx('switch-input');
    const switchSliderClasses = cx('switch-slider', { checked, disabled });

    return (
        <label className={switchClasses}>
            <input
                type="checkbox"
                className={inputClasses}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            <span className={switchSliderClasses}></span>
        </label>
    );
};

export default BaseSwitch;
