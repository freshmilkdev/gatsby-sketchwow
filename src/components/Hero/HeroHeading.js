import React from 'react';
import * as styles from './Hero.module.css';
import SVG from "../../assets/svg/special-offer-bg.inline.svg";

export const HeroHeading = ({text}) => (
    <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
            {text}
            <SVG className={styles.image}/>
        </h2>
    </div>
);
