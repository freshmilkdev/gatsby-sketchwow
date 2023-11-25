import React from 'react';
import * as styles from './Hero.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const HeroHeading = ({text}) => (
    <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
            {text}
            <StaticImage
                className={styles.image}
                src="../../images/special-offer-bg.png"
                loading="lazy"
                width={573}
                quality={95}
                alt=""
            />
        </h2>

    </div>
);
