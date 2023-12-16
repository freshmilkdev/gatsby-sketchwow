import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {LineHeading} from "../LineHeading/LineHeading";
import * as styles from './AnimateAnythingSection.module.css'

import Click1SVG from "../../assets/svg/click1.inline.svg";
import Click2SVG from "../../assets/svg/click2.inline.svg";
import PointerLeftSVG from "../../assets/svg/pointer-left.inline.svg";
import PointerRightSVG from "../../assets/svg/pointer-right.inline.svg";
import LeftImageSVG from "../../assets/svg/two-clicks-left.inline.svg";
import RightImageSVG from "../../assets/svg/two-clicks-right.inline.svg";
import BubbleSVG from "../../assets/svg/two-clicks-right-bubble.inline.svg";
export const AnimateAnythingSection = () => (
    <WaveHeaderSection color={'green'}>
        <LineHeading lineColor='green'>
            <span>2 Clicks = <u>Animate Anything</u></span>
        </LineHeading>
        <p className={`${styles.afterHeading} font-24 font-medium text-center`}>Yup. It's that easy!</p>

        <div className={`${styles.clicks} font-24 font-bold`}>
            <div>
                <div className={styles.click}>
                    <Click1SVG className={styles.image}/>
                    <p>Highlight An Element On The Canvas</p>
                </div>
                <div className={styles.leftWrapper}>
                    <LeftImageSVG/>
                    <PointerLeftSVG
                        className={styles.leftGraphics}
                        style={{position: 'absolute'}}
                    />
                </div>
            </div>
            <div className={styles.rightCol}>
                <div className={styles.click}>
                    <Click2SVG className={styles.image}/>
                    <p>Choose Your Animation Effect</p>
                </div>
                <div className={styles.rightWrapper}>
                    <RightImageSVG/>
                    <PointerRightSVG
                        className={styles.rightGraphics}
                        style={{position: 'absolute'}}
                    />
                </div>
            </div>
        </div>

        <div className={styles.bubble}>
            <BubbleSVG/>
        </div>
    </WaveHeaderSection>);