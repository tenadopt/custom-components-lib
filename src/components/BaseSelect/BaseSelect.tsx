import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import BaseInput from '../BaseInput/BaseInput';
import BaseButton from '../BaseButton/BaseButton';
import cnBind from 'classnames/bind';
import styles from './BaseSelect.module.scss';
import IconButton from '../Icon/IconButton';

export interface BaseSelectProps extends React.ComponentProps<'select'> {
    /**Select label*/
    label: string;
    /**Select options*/
    options: string[];
    /**Select defaultValue*/
    defaultValue: string;
    /**Select error*/
    selectError: boolean;
}

const cx = cnBind.bind(styles);

const BaseSelect = ({
    label,
    options,
    defaultValue = '',
    selectError,
    onChange,
}: BaseSelectProps) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const inputElement = inputRef.current;
        const divElement = divRef.current;

        if (inputElement && divElement) {
            const inputRect = inputElement.getBoundingClientRect();

            divElement.style.position = 'absolute';
            divElement.style.width = `${inputRect.width}px`;
            divElement.style.top = `${inputRect.bottom}px`;
            divElement.style.left = `${inputRect.left}px`;
            divElement.style.zIndex = '999';
        }
    }, [inputRef]);

    const handleOptionClick = (option: string) => {
        setSelectedItem(option);
        setOpen(false);

        if (onChange) {
            const event = {
                target: { value: option },
            } as unknown as ChangeEvent<HTMLSelectElement>;

            onChange(event);
        }
    };

    const handleOpen = () => {
        setOpen(true);
        inputRef.current.focus();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const arrow = cx({
        arrowRotate: open,
    });

    const optionsContainer = cx('optionsContainer', {
        hidden: !open,
    });

    return (
        <div id="select" className={styles.select}>
            <div className={styles.selectContainer} onClick={handleOpen}>
                <BaseInput
                    role="combobox"
                    value={selectedItem}
                    variant="outlined"
                    select={open}
                    ref={inputRef}
                    label={label}
                    error={selectError}
                    className={styles.input}
                    readOnly
                >
                    <IconButton className={styles.input} arrow={arrow} />
                </BaseInput>
            </div>
            {open && <div className={styles.mask} onClick={handleClose} />}
            {createPortal(
                <>
                    <div role="listbox" ref={divRef} className={optionsContainer}>
                        {open &&
                            Array.isArray(options) &&
                            options.map(option => {
                                return (
                                    <BaseButton
                                        key={option}
                                        className={styles.optionButton}
                                        variant="text"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </BaseButton>
                                );
                            })}
                    </div>
                </>,
                document.body,
            )}
        </div>
    );
};

export default BaseSelect;
