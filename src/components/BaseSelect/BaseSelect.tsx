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
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!open) {
            if (e.key === 'Enter') {
                setOpen(true);
            }

            return;
        }

        switch (e.key) {
            case 'Escape':
                setOpen(false);
                break;
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prevIndex =>
                    prevIndex < options.length - 1 ? prevIndex + 1 : 0,
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prevIndex =>
                    prevIndex > 0 ? prevIndex - 1 : options.length - 1,
                );
                break;
            case 'Enter':
                if (highlightedIndex >= 0 && highlightedIndex < options.length) {
                    handleOptionClick(options[highlightedIndex]);
                }

                break;
        }
    };

    const arrow = cx({
        arrowRotate: open,
    });

    const optionsContainer = cx('optionsContainer', {
        hidden: !open,
    });

    useEffect(() => {
        if (open) {
            setHighlightedIndex(options.findIndex(option => option === selectedItem));
        } else {
            setHighlightedIndex(-1);
        }
    }, [open, options, selectedItem]);

    return (
        <div id="select" className={styles.select}>
            <div
                className={styles.selectContainer}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-controls="select-options"
                tabIndex={0}
            >
                <BaseInput
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
                    <div
                        role="listbox"
                        ref={divRef}
                        className={optionsContainer}
                        id="select-options"
                    >
                        {open &&
                            Array.isArray(options) &&
                            options.map((option, index) => {
                                const optionCx = cx('optionButton', {
                                    highlighted: index === highlightedIndex,
                                });

                                return (
                                    <BaseButton
                                        key={option}
                                        className={optionCx}
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
