import React from 'react';
import styles from '../BaseSelect/BaseSelect.module.scss';
import { ReactComponent as Icon } from '../../assets/down-arrow.svg';

interface IconButtonProps {
    handleOpen: () => void;
    arrow: string;
}

const IconButton = ({ handleOpen, arrow }: IconButtonProps) => {
    return (
        <button onClick={handleOpen} className={styles.selectButton}>
            <Icon className={`${styles.icon} ${arrow}`} />
        </button>
    );
};

export default IconButton;
