import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseModal, { BaseModalProps } from './BaseModal';
import './BaseModal.module.scss';
import BaseButton from '../BaseButton/BaseButton';

const meta: Meta<BaseModalProps> = {
    title: 'Components/BaseModal',
    component: BaseModal,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        open: {
            control: 'boolean',
        },
        onClose: {
            action: 'closed',
        },
        children: {
            control: 'text',
        },
    },
    args: {
        open: false,
        children: 'This is the content of the modal.',
        onClose: action('modal-close'),
    },
};

export default meta;

type Story = StoryObj<BaseModalProps>;

const Template: Story = {
    render: args => {
        const [open, setOpen] = useState(args.open);

        const handleOpen = () => setOpen(true);
        const handleClose = () => {
            setOpen(false);
            args.onClose();
        };

        return (
            <div>
                <BaseButton onClick={handleOpen}>Open Modal</BaseButton>
                <BaseModal {...args} open={open} onClose={handleClose}>
                    {args.children}
                </BaseModal>
                <div id="modal-root"></div>
            </div>
        );
    },
};

export const Default: Story = {
    ...Template,
    args: {
        open: false,
        children: 'This is the content of the modal.',
    },
};

export const WithCustomContent: Story = {
    ...Template,
    args: {
        open: false,
        children: (
            <div>
                <h2>Custom Content</h2>
                <p>This modal contains custom content.</p>
            </div>
        ),
    },
};

export const InitiallyOpen: Story = {
    ...Template,
    args: {
        open: true,
        children: 'This modal is initially open.',
    },
};
