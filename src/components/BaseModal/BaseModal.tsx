import React from 'react';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import cnBind from 'classnames/bind';
import BaseButton from '../BaseButton/BaseButton.tsx';
import styles from './BaseModal.module.scss';

export interface BaseModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const cx = cnBind.bind(styles);

function BaseModal({ open, onClose, children }: Partial<BaseModalProps>) {
    if (!open) return null;

    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        // eslint-disable-next-line no-console
        console.error('Modal root element not found');

        return null;
    }

    return createPortal(
        <div className={cx('modal-overlay')}>
            <div className={cx('modal-container')}>
                <div className={cx('modal-header')}>
                    <h2>Modal Title</h2>
                    <BaseButton className={cx('modal-close')} onClick={onClose}>
                        &times;
                    </BaseButton>
                </div>
                <div className={cx('modal-content')}>{children}</div>
                <div className={cx('modal-footer')}>
                    <BaseButton onClick={onClose} className={cx('modal-button')}>
                        Close
                    </BaseButton>
                </div>
            </div>
        </div>,
        modalRoot,
    );
}

export default BaseModal;
