import React from 'react';
import * as styles from './AnimateThingsGrid.module.css'

export const ThingItem = ({icon, title}) => (
    <div className={styles.featureWrapper}>
        <figure className={`${styles.feature} font-bold`}>
            <div className={styles.imgWrapper}>{icon}</div>
            <figcaption>{title}</figcaption>
        </figure>
    </div>
);
