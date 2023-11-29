import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {LineHeading} from "../LineHeading/LineHeading";
import * as styles from './AnimateAnythingSection.module.css'

export const AnimateAnythingSection = () => (
    <WaveHeaderSection color={'green'}>
        <LineHeading lineColor='green'>
            <span>2 Clicks = <u>Animate Anything</u></span>
        </LineHeading>
        <p className={`${styles.afterHeading} font-24 font-medium text-center`}>Yup. It's that easy!</p>
    </WaveHeaderSection>
);