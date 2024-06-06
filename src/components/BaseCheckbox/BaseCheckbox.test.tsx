import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BaseCheckbox, { BaseCheckboxProps } from './BaseCheckbox.tsx';

const renderComponent = (props: Partial<BaseCheckboxProps> = {}) => {
    const defaultProps: BaseCheckboxProps = {
        label: 'Checkbox',
        checked: false,
        onChange: jest.fn(),
        disabled: false,
        ...props,
    };

    return render(<BaseCheckbox {...defaultProps} />);
};

describe('BaseCheckbox', () => {
    test('renders with correct label', () => {
        renderComponent({ label: 'Accept Terms' });
        const labelElement = screen.getByText(/Accept Terms/i);

        expect(labelElement).toBeInTheDocument();
    });

    test('renders with correct checked state', () => {
        renderComponent({ checked: true });
        const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkboxElement.checked).toBe(true);
    });

    test('renders with correct unchecked state', () => {
        renderComponent({ checked: false });
        const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkboxElement.checked).toBe(false);
    });

    test('triggers onChange event when clicked', () => {
        const handleChange = jest.fn();

        renderComponent({ onChange: handleChange });
        const checkboxElement = screen.getByRole('checkbox');

        fireEvent.click(checkboxElement);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('renders with correct disabled state', () => {
        renderComponent({ disabled: true });
        const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkboxElement.disabled).toBe(true);
    });

    test('applies custom class names', () => {
        renderComponent({ className: 'custom-class' });
        const inputElement = screen.getByRole('checkbox');

        expect(inputElement).toHaveClass('custom-class');
    });
});
