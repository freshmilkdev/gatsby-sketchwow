import React from 'react';
import * as styles from './Container.module.css';

export const Container = ({children, className = ''}) => (
    <div className={`${styles.container} ${className}`}>{children}</div>
);