import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseButton, { BaseButtonProps } from './BaseButton.tsx';

const meta: Meta<BaseButtonProps> = {
    title: 'Components/BaseButton',
    component: BaseButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
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
        variant: 'outlined',
        size: 'medium',
    },
} as Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<BaseButtonProps>;

export const Default: Story = {
    args: {
        variant: 'outlined',
        size: 'medium',
        children: 'Base Button',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        size: 'medium',
        children: 'Text Button',
    },
};

export const Contained: Story = {
    args: {
        variant: 'contained',
        size: 'medium',
        children: 'Contained Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        size: 'medium',
        children: 'Outlined Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        variant: 'outlined',
        children: 'Small Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        variant: 'outlined',
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        variant: 'outlined',
        children: 'Large Button',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        variant: 'outlined',
        size: 'medium',
        children: 'Disabled Button',
    },
};
