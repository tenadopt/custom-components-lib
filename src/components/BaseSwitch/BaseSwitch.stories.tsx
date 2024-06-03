import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseSwitch, { BaseSwitchProps } from './BaseSwitch';

const meta: Meta<BaseSwitchProps> = {
    title: 'Components/BaseSwitch',
    component: BaseSwitch,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: { control: 'boolean' },
        onChange: { action: 'changed' },
        disabled: { control: 'boolean' },
    },
    args: {
        onChange: action('switch-toggled'),
    },
} as Meta<typeof BaseSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
    },
};

export const CheckedDisabled: Story = {
    args: {
        checked: true,
        disabled: true,
    },
};
