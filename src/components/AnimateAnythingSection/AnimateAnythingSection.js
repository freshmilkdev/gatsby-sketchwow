import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {LineHeading} from "../LineHeading/LineHeading";
import * as styles from './AnimateAnythingSection.module.css'
import {StaticImage} from "gatsby-plugin-image";
import {TwoClicks} from "./TwoClicks";

export const AnimateAnythingSection = () => (
    <WaveHeaderSection color={'green'}>
        <LineHeading lineColor='green'>
            <span>2 Clicks = <u>Animate Anything</u></span>
        </LineHeading>
        <p className={`${styles.afterHeading} font-24 font-medium text-center`}>Yup. It's that easy!</p>
        <TwoClicks/>
        <div className={styles.appScreenshots}>
            <StaticImage
                objectFit={'contain'}
                src="../../images/2clicks-left.png"
                loading="lazy"
                width={753}
                quality={90}
                alt=""
            />
            <div className={styles.rightWrapper}>
                <StaticImage
                    className={styles.rightImageWrapper}
                    src="../../images/2clicks-right.png"
                    loading="lazy"
                    width={715}
                    quality={100}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.bubble}>
            <StaticImage
                className={styles.rightImageWrapper}
                src="../../images/2clicks-right-bubble.png"
                loading="lazy"
                width={396}
                quality={100}
                alt=""
            />
        </div>
    </WaveHeaderSection>);