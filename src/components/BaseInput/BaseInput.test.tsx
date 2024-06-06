import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseInput, { BaseInputProps } from './BaseInput.tsx';

const renderComponent = (props: Partial<BaseInputProps> = {}) => {
    const defaultProps: BaseInputProps = {
        id: 'test-input',
        label: 'Test Label',
        variant: 'standard',
        error: false,
        disabled: false,
        ...props,
    };

    return render(<BaseInput {...defaultProps} />);
};

describe('BaseInput', () => {
    test('renders with correct label', () => {
        renderComponent({ label: 'Name' });
        const labelElement = screen.getByLabelText('Name');

        expect(labelElement).toBeInTheDocument();
    });

    test('applies correct variant class', () => {
        renderComponent({ variant: 'outlined' });
        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toHaveClass('outlined');
    });

    test('renders with error class when error prop is true', () => {
        renderComponent({ error: true });
        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toHaveClass('error');
    });

    test('renders with disabled attribute when disabled prop is true', () => {
        renderComponent({ disabled: true });
        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toBeDisabled();
    });

    test('renders with correct value', () => {
        renderComponent({ value: 'Test value' });
        const inputElement = screen.getByLabelText('Test Label') as HTMLInputElement;

        expect(inputElement.value).toBe('Test value');
    });

    test('renders with custom class name', () => {
        renderComponent({ className: 'custom-class' });
        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toHaveClass('custom-class');
    });

    test('renders children elements', () => {
        renderComponent({ children: <span>Child element</span> });
        const childElement = screen.getByText('Child element');

        expect(childElement).toBeInTheDocument();
    });
});
