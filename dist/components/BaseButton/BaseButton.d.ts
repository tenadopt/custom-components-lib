import React, { FC } from 'react';
export interface BaseButtonProps {
    children: React.ReactNode;
    color: string;
}
declare const BaseButton: FC<BaseButtonProps>;
export default BaseButton;
