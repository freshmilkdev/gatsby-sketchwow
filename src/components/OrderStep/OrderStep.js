import React from 'react';
import * as styles from './OrderStep.module.css';

export const OrderStep = ({stepNumber = 2, total = 3}) => (
    <nav className={styles.stepper}>
        <span className={styles.text}>CUSTOMIZE YOUR ORDER</span>
        <span className={styles.orderStep}>
            <span className={styles.currentStep}>STEP {stepNumber}</span>
            <span> OF {total}</span>
        </span>
    </nav>
);
