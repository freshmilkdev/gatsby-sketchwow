import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {LineHeading} from "../LineHeading/LineHeading";
import * as styles from './AnimateAnythingSection.module.css'
import {StaticImage} from "gatsby-plugin-image";


export const AnimateAnythingSection = () => (
    <WaveHeaderSection color={'green'}>
        <LineHeading lineColor='green'>
            <span>2 Clicks = <u>Animate Anything</u></span>
        </LineHeading>
        <p className={`${styles.afterHeading} font-24 font-medium text-center`}>Yup. It's that easy!</p>

        <div className={`${styles.clicks} font-24 font-bold`}>
            <div>
                <div className={styles.click}>
                    <StaticImage
                        className={styles.image}
                        src="../../images/click1.png"
                        loading="lazy"
                        width={149}
                        quality={95}
                        alt=""
                    />
                    <h5>Highlight An Element On The Canvas</h5>
                </div>
                <div className={styles.leftWrapper}>
                    <StaticImage
                        src="../../images/2clicks-left.png"
                        loading="lazy"
                        width={753}
                        quality={90}
                        alt=""
                    />
                    <StaticImage
                        className={styles.leftGraphics}
                        style={{position: 'absolute'}}
                        src="../../images/2clicks-left-arrows.png"
                        loading="lazy"
                        width={76}
                        quality={100}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.rightCol}>
                <div className={styles.click}>
                    <StaticImage
                        className={styles.image}
                        src="../../images/click2.png"
                        loading="lazy"
                        width={151}
                        quality={95}
                        alt=""
                    />
                    <h5>Choose Your Animation Effect</h5>
                </div>
                <div className={styles.rightWrapper}>
                    <StaticImage
                        src="../../images/2clicks-right.png"
                        loading="lazy"
                        width={715}
                        quality={100}
                        alt=""
                    />
                    <StaticImage
                        className={styles.rightGraphics}
                        style={{position: 'absolute'}}
                        src="../../images/2clicks-right-arrows.png"
                        loading="lazy"
                        width={66}
                        quality={100}
                        alt=""
                    />
                </div>
            </div>
        </div>

        <div className={styles.bubble}>
            <StaticImage
                src="../../images/2clicks-right-bubble.png"
                loading="lazy"
                width={396}
                quality={100}
                alt=""
            />
        </div>
    </WaveHeaderSection>);