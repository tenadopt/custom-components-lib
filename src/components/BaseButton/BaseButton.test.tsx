import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseButton, { BaseButtonProps } from './BaseButton.tsx';

const renderComponent = (props: Partial<BaseButtonProps> = {}) => {
    const defaultProps: BaseButtonProps = {
        variant: 'text',
        size: 'medium',
        children: 'Button',
        ...props,
    };

    return render(<BaseButton {...defaultProps} />);
};

describe('BaseButton', () => {
    test('renders with correct text', () => {
        renderComponent({ children: 'Click me' });
        const buttonElement = screen.getByText(/Click me/i);

        expect(buttonElement).toBeInTheDocument();
    });

    test('applies correct variant class', () => {
        renderComponent({ variant: 'contained' });
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toHaveClass('contained');
    });

    test('applies correct size class', () => {
        renderComponent({ size: 'large' });
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toHaveClass('large');
    });

    test('applies additional class names', () => {
        renderComponent({ className: 'custom-class' });
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toHaveClass('custom-class');
    });

    test('passes props to the button element', () => {
        renderComponent({ 'aria-label': 'custom label' });
        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toHaveAttribute('aria-label', 'custom label');
    });
});
