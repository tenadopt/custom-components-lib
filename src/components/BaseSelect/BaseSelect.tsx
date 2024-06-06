import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import cnBind from 'classnames/bind';
import BaseInput from '../BaseInput/BaseInput.tsx';
import BaseButton from '../BaseButton/BaseButton.tsx';
import styles from './BaseSelect.module.scss';
import IconButton from '../IconButton/IconButton.tsx';

export interface BaseSelectProps extends React.ComponentProps<'select'> {
    /** Select label */
    label: string;
    /** Select options */
    options: string[];
    /** Select defaultValue */
    defaultValue: string;
    /** Select error */
    selectError: boolean;
}

const cx = cnBind.bind(styles);

function BaseSelect({ label, options, defaultValue = '', selectError, onChange }: BaseSelectProps) {
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
    }, [inputRef, open]);

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
        inputRef.current?.focus();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleOpen();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            handleClose();
        }
    };

    const handleOptionKeyDown = (event: React.KeyboardEvent, option: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleOptionClick(option);
        }
    };

    const arrow = cx({
        arrowRotate: open,
    });

    const optionsContainer = cx('optionsContainer', {
        hidden: !open,
    });

    const inputId = 'base-select-input';
    const listboxId = 'listbox-options';

    return (
        <div id="select" className={styles.select}>
            <div
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-owns={listboxId}
                aria-controls={listboxId}
                tabIndex={0}
                className={styles.selectContainer}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
            >
                <BaseInput
                    id={inputId}
                    role="textbox"
                    aria-autocomplete="list"
                    aria-controls={listboxId}
                    aria-activedescendant={selectedItem ? `option-${selectedItem}` : undefined}
                    value={selectedItem}
                    variant="outlined"
                    select={open ? true : undefined}
                    ref={inputRef}
                    label={label}
                    error={selectError}
                    className={styles.input}
                    readOnly
                    onChange={e => setSelectedItem(e.target.value)}
                >
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                    </label>
                    <IconButton className={styles.input} arrow={arrow} />
                </BaseInput>
            </div>
            {open && (
                <div
                    role="presentation"
                    className={styles.mask}
                    onClick={handleClose}
                    tabIndex={-1}
                />
            )}
            {createPortal(
                <div id={listboxId} role="listbox" ref={divRef} className={optionsContainer}>
                    {open &&
                        Array.isArray(options) &&
                        options.map(option => {
                            return (
                                <BaseButton
                                    key={option}
                                    id={`option-${option}`}
                                    role="option"
                                    aria-selected={selectedItem === option}
                                    className={styles.optionButton}
                                    variant="text"
                                    onClick={() => handleOptionClick(option)}
                                    onKeyDown={e => handleOptionKeyDown(e, option)}
                                    tabIndex={0}
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
}

export default BaseSelect;
