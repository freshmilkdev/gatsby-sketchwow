import React from 'react';
import {Link} from "gatsby"
import * as styles from "./UpgradeOrderButton.module.css";
import {StaticImage} from "gatsby-plugin-image";
import LeftArrowSVG from "../../../assets/svg/order-button-left-arrow.inline.svg";
import RightArrowSVG from "../../../assets/svg/order-button-right-arrow.inline.svg";

export const UpgradeOrderButton = ({link, afterText}) => (
    <div>
        <div className={styles.wrapper}>
            <LeftArrowSVG className={styles.buttonArrow}/>

            <Link to={link} className={styles.button}>
                <span className={styles.label}>Yes! Upgrade My Order</span>
                <span>*CLICKING HERE WILL CHARGE YOUR CARD AN ADDITIONAL $79.</span>
            </Link>

            <RightArrowSVG className={styles.buttonArrow}/>
        </div>
        <p className={`font-22 font-extrabold ${styles.afterText}`}>{afterText}</p>
    </div>
);
