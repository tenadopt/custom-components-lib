import React from 'react';
import { ReactComponent as Icon } from '../../assets/down-arrow.svg';
import styles from '../BaseSelect/BaseSelect.module.scss';

interface IconButtonProps {
    handleOpen?: () => void;
    arrow?: string;
    className?: string;
}

function IconButton({ handleOpen, arrow, className }: IconButtonProps) {
    return (
        <button onClick={handleOpen} className={className}>
            <Icon className={`${styles.icon} ${arrow}`} />
        </button>
    );
}

export default IconButton;
