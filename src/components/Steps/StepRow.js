import React from 'react';
import * as styles from "./Steps.module.css";

export const StepRow = ({title, description, index}) => (
    <li>
        <div className={styles.listImage}>
            {index}
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </li>
);
