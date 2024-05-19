import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseInput, { BaseInputProps } from './BaseInput';

const meta: Meta<BaseInputProps> = {
    title: 'Components/BaseInput',
    component: BaseInput,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['standard', 'outlined', 'filled'],
        },
        type: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
        error: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
        select: {
            control: 'boolean',
        },
        onBlur: {
            action: 'blurred',
        },
        onChange: {
            action: 'changed',
        },
        inputRef: {
            control: false,
        },
        role: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
        id: {
            control: 'text',
        },
    },
    args: {
        variant: 'standard',
        type: 'text',
        value: '',
        label: 'Label',
        id: 'base-input',
        onChange: action('input-change'),
        onBlur: action('input-blur'),
    },
} as Meta<BaseInputProps>;

export default meta;

type Story = StoryObj<BaseInputProps>;

export const Default: Story = {
    args: {
        variant: 'standard',
        label: 'Standard Input',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        label: 'Outlined Input',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        label: 'Filled Input',
    },
};

export const WithError: Story = {
    args: {
        variant: 'standard',
        label: 'Input with Error',
        error: true,
    },
};

export const Disabled: Story = {
    args: {
        variant: 'standard',
        label: 'Disabled Input',
        disabled: true,
    },
};

export const Required: Story = {
    args: {
        variant: 'standard',
        label: 'Required Input',
        required: true,
    },
};
