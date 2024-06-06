import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BaseSwitch, { BaseSwitchProps } from './BaseSwitch.tsx';

const renderComponent = (props: Partial<BaseSwitchProps> = {}) => {
    const defaultProps: BaseSwitchProps = {
        checked: false,
        onChange: jest.fn(),
        disabled: false,
        ...props,
    };

    return render(<BaseSwitch {...defaultProps} />);
};

describe('BaseSwitch', () => {
    test('renders correctly', () => {
        renderComponent();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    test('is checked when checked prop is true', () => {
        renderComponent({ checked: true });
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkbox.checked).toBe(true);
    });

    test('is not checked when checked prop is false', () => {
        renderComponent({ checked: false });
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkbox.checked).toBe(false);
    });

    test('calls onChange when clicked', () => {
        const onChange = jest.fn();

        renderComponent({ onChange });
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('is disabled when disabled prop is true', () => {
        renderComponent({ disabled: true });
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

        expect(checkbox.disabled).toBe(true);
    });

    test('applies custom class name', () => {
        renderComponent({ className: 'custom-class' });
        const switchLabel = screen.getByRole('checkbox').closest('label');

        expect(switchLabel).toHaveClass('custom-class');
    });
});
