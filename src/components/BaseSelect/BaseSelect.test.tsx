// BaseSelect.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BaseSelect, { BaseSelectProps } from './BaseSelect.tsx';

jest.mock(
    '../IconButton/IconButton',
    () =>
        function Mockfun(props: any) {
            return <button {...props} />;
        },
);

const setup = (props: Partial<BaseSelectProps> = {}) => {
    const defaultProps: BaseSelectProps = {
        label: 'Test Select',
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultValue: '',
        selectError: false,
        onChange: jest.fn(),
    };

    return render(<BaseSelect {...defaultProps} {...props} />);
};

test('renders BaseSelect with label', () => {
    setup();
    expect(screen.getByLabelText('Test Select')).toBeInTheDocument();
});

test('opens options on click', async () => {
    setup();
    fireEvent.click(screen.getByLabelText('Test Select'));
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
});

test('handles default value', () => {
    setup({ defaultValue: 'Option 1' });
    expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
});

test('displays error state', () => {
    setup({ selectError: true });
    expect(screen.getByLabelText('Test Select')).toHaveClass('error');
});
