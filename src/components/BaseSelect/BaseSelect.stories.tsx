import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseSelect, { BaseSelectProps } from './BaseSelect.tsx';

const meta: Meta<BaseSelectProps> = {
    title: 'Components/BaseSelect',
    component: BaseSelect,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: 'text',
        },
        options: {
            control: 'array',
        },
        defaultValue: {
            control: 'text',
        },
        selectError: {
            control: 'boolean',
        },
        onChange: {
            action: 'changed',
        },
    },
    args: {
        label: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultValue: '',
        selectError: false,
        onChange: action('select-change'),
    },
} as Meta<BaseSelectProps>;

export default meta;

type Story = StoryObj<BaseSelectProps>;

export const Default: Story = {
    args: {
        label: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultValue: '',
        selectError: false,
    },
};

export const WithError: Story = {
    args: {
        label: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultValue: '',
        selectError: true,
    },
};

export const PreselectedValue: Story = {
    args: {
        label: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        defaultValue: 'Option 1',
        selectError: false,
    },
};
