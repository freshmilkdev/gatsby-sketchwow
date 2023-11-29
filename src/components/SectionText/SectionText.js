import React from 'react';
import * as styles from './SectionText.module.css';

export const SectionText = ({children, className, textGap = false}) => (
    <div className={`${styles.sectionText} ${className} ${textGap ? styles.textGap : ''} font-18`}>
        {children}
    </div>
);