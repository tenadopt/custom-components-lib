import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseCheckbox, { BaseCheckboxProps } from './BaseCheckbox.tsx';

const meta: Meta<BaseCheckboxProps> = {
    title: 'Components/BaseCheckbox',
    component: BaseCheckbox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: { control: 'text' },
        checked: { control: 'boolean' },
        onChange: { action: 'changed' },
        disabled: { control: 'boolean' },
    },
    args: {
        onChange: action('checkbox-changed'),
    },
} as Meta<typeof BaseCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Label',
        checked: false,
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked',
        checked: true,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        checked: false,
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled Checked',
        checked: true,
        disabled: true,
    },
};
