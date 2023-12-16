import React from 'react';
import * as styles from './TenReasons.module.css';

export const ReasonCard = ({icon, title}) => (
    <div className={styles.card}>
        <figure className={`${styles.reason} font-bold`}>
            <div className={styles.imgWrapper}><div>{icon}</div></div>
            <figcaption>{title}</figcaption>
        </figure>
    </div>
);
