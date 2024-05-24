import React from 'react';
import styles from '../BaseSelect/BaseSelect.module.scss';
import { ReactComponent as Icon } from '../../assets/down-arrow.svg';

const IconButton = ({ handleOpen, arrow }) => {
    return (
        <button
            onClick={handleOpen}
            className={styles.selectButton}
            style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
        >
            <Icon className={`${styles.icon} ${arrow}`} />
        </button>
    );
};

export default IconButton;
