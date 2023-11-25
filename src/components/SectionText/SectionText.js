import React from 'react';
import * as styles from './SectionText.module.css';

export const SectionText = ({children}) => (
    <div className={styles.heroText}>
        {children}
    </div>
);