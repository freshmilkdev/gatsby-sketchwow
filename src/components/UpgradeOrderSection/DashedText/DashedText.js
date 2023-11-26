import React from 'react';
import * as styles from './DashedText.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const DashedText = ({children}) => (
    <div className={styles.wrapper}>
        <div className={`${styles.inner} font-18`}>
            <StaticImage
                style={{position: "absolute"}}
                className={styles.leftImage}
                src="../../../images/no-thanks-left-image.png"
                loading="lazy"
                width={52}
                quality={95}
                alt=""
            />
            <p>{children}</p>
            <StaticImage
                style={{position: "absolute"}}
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

