import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import BaseInput from '../BaseInput/BaseInput';
import BaseButton from '../BaseButton/BaseButton';
import ArrowIcon from '../Icon/ArrowIcon';
import cnBind from 'classnames/bind';
import styles from './BaseSelect.module.scss';
import { useOutsideClick } from '../../utils/useOutsideClick';

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

    useOutsideClick(divRef, () => {
        setOpen(false);
        setSelectedItem(defaultValue);
    });

    useEffect(() => {
        const inputElement = inputRef.current;
        const divElement = divRef.current;

        if (inputElement && divElement) {
            const inputRect = inputElement.getBoundingClientRect();

            divElement.style.position = 'absolute';
            divElement.style.width = `${inputRect.width}px`;
            divElement.style.top = `${inputRect.bottom}px`;
            divElement.style.left = `${inputRect.left}px`;

            const handleClick = () => setOpen(true);

            divElement.addEventListener('click', handleClick);

            return () => {
                divElement.removeEventListener('click', handleClick);
            };
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
        setOpen(!open);
    };

    const arrow = cx({
        arrowRotate: open,
    });

    const optionsContainer = cx('optionsContainer', {
        none: !open,
    });

    return (
        <div id="select" className={styles.select}>
            <div className={styles.selectContainer}>
                <BaseInput
                    role="combobox"
                    value={selectedItem}
                    variant="outlined"
                    select={open}
                    ref={inputRef}
                    label={label}
                    error={selectError}
                    className={styles.input}
                    onClick={handleOpen}
                    readOnly
                >
                    <button
                        onClick={handleOpen}
                        className={styles.selectButton}
                        style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    >
                        <ArrowIcon className={arrow} />
                    </button>
                </BaseInput>
            </div>
            {createPortal(
                <div ref={divRef} className={optionsContainer}>
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
                </div>,
                document.body,
            )}
        </div>
    );
};

export default BaseSelect;
