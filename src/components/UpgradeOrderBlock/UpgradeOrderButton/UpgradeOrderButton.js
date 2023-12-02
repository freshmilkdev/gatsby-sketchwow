import React from 'react';
import {Link} from "gatsby"
import * as styles from "./UpgradeOrderButton.module.css";
import {StaticImage} from "gatsby-plugin-image";

export const UpgradeOrderButton = ({link, afterText}) => (
    <div>
        <div className={styles.wrapper}>
            <StaticImage
                className={styles.buttonArrow}
                src="../../../images/order-button-left-arrow.png"
                loading="lazy"
                width={98}
                quality={90}
                alt=""
            />

            <Link to={link} className={styles.button}>
                <span className={styles.label}>Yes! Upgrade My Order</span>
                <span>*CLICKING HERE WILL CHARGE YOUR CARD AN ADDITIONAL $79.</span>
            </Link>

            <StaticImage
                className={styles.buttonArrow}
                src="../../../images/order-button-right-arrow.png"
                loading="lazy"
                width={98}
                quality={90}
                alt=""
            />
        </div>
        <p className={`font-22 font-extrabold ${styles.afterText}`}>{afterText}</p>
    </div>
);
