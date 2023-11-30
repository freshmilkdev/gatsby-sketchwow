import React from 'react';
import * as styles from './SectionText.module.css';

export const SectionText = ({children, className, style = {}, textGap = false}) => (
    <div style={style} className={`${styles.sectionText} ${className} ${textGap ? styles.textGap : ''} font-18`}>
        {children}
    </div>
);