import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseButton, { BaseButtonProps } from './BaseButton';

const meta: Meta<BaseButtonProps> = {
    title: 'Components/BaseButton',
    component: BaseButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: { control: 'color' },
        variant: {
            control: 'inline-radio',
            options: ['text', 'contained', 'outlined'],
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
        },
        onClick: {
            action: 'clicked',
        },
        disabled: {
            control: 'boolean',
        },
    },
    args: {
        onClick: action('button-click'),
        label: 'Base Button',
    },
} as Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'outlined',
        children: 'BaseButton',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Text Button',
    },
};

export const Contained: Story = {
    args: {
        variant: 'contained',
        children: 'Contained Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Small Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Large Button',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};
