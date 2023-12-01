import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {SectionText} from "../SectionText/SectionText";
import * as styles from './SoEasySection.module.css'

export const SoEasySection = () => (
    <WaveHeaderSection color={'sand'}>
        <LineHeading lineColor='yellow'>
            <span>lt’s Soooo Easy To Use Too!</span>
        </LineHeading>
        <SectionText textGap className={styles.text}>
            <p>
                Listen. There’s a reason why you can take endless courses to learn PowerPoint or Adobe’s animation
                tools. <br/>
                Why? Because they are complicated.
            </p>
            <p>
                Also, most tools include way too many “power-features” that you’ll never use. This only adds to the
                clutter, <br/>
                confusion and slows you down.
            </p>
            <p>I hope you are getting excited about what SketchWow Animate can do for you.</p>
            <p>If you are still on-the-fence… and need a few more reasons (...or excuses) why you really oughta join us…
                here you go!</p>
        </SectionText>
    </WaveHeaderSection>
);