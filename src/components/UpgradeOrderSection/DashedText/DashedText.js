import React from 'react';
import * as styles from './DashedText.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const DashedText = ({children}) => (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
            <StaticImage
                className={styles.leftImage}
                src="../../../images/no-thanks-left-image.png"
                loading="lazy"
                width={52}
                quality={95}
                alt=""
            />
            <p>{children}</p>
            <StaticImage
                className={styles.rightImage}
                src="../../../images/no-thanks-right-image.png"
                loading="lazy"
                width={37}
                quality={95}
                alt=""
            />
        </div>
    </div>
);

