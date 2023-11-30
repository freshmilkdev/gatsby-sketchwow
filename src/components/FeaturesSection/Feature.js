import React from 'react';
import * as styles from './FeaturesSection.module.css'

export const Feature = ({icon, title}) => (
    <div className={styles.featureWrapper}>
        <figure className={`${styles.feature} font-bold`}>
            <div className={styles.imgWrapper}>{icon}</div>
            <figcaption>{title}</figcaption>
        </figure>
    </div>
);
