import React from 'react';
import {SectionText} from "../SectionText/SectionText";

import * as styles from './BonusesSection.module.css';

export const BonusRow = ({price, heading, text, image}) => (
    <article className={styles.row}>
        <div className={styles.imageWrapper}>{image}</div>
        <div>
            <div className={styles.price}>{price}</div>
            <h3 className={'font-35 font-bold'}>{heading}</h3>
            <SectionText className={styles.rowText} textGap>{text}</SectionText>
        </div>
    </article>
);
