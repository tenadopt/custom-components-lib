import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseModal, { BaseModalProps } from './BaseModal.tsx';

const renderComponent = (props: Partial<BaseModalProps> = {}) => {
    const defaultProps: BaseModalProps = {
        open: true,
        onClose: jest.fn(),
        children: 'Modal content',
        ...props,
    };

    return render(<BaseModal {...defaultProps} />);
};

describe('BaseModal', () => {
    beforeEach(() => {
        const modalRoot = document.createElement('div');

        modalRoot.setAttribute('id', 'modal-root');
        document.body.appendChild(modalRoot);
    });

    afterEach(() => {
        const modalRoot = document.getElementById('modal-root');

        if (modalRoot) {
            document.body.removeChild(modalRoot);
        }
    });

    test('renders correctly when open', () => {
        renderComponent();
        expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    test('does not render when closed', () => {
        renderComponent({ open: false });
        expect(screen.queryByText('Modal content')).toBeNull();
    });

    test('calls onClose when close button is clicked', () => {
        const onClose = jest.fn();

        renderComponent({ onClose });
        fireEvent.click(screen.getByText('×'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('calls onClose when close button in footer is clicked', () => {
        const onClose = jest.fn();

        renderComponent({ onClose });
        fireEvent.click(screen.getByText('Close'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
