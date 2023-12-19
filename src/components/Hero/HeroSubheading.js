import React from 'react';
import * as styles from './Hero.module.css';
import UnderlineSVG from "../../assets/svg/underline.inline.svg";

export const HeroSubheading = ({text}) => (
    <h3 className={styles.subheading}>
        Imagine If... In 2 Mouse Clicks, You Can <span className={styles.underline}>
            Instantly
        <UnderlineSVG className={styles.underlineImage}/>
        </span> Add Eye-Catching Animations, Effects & Motion To
        ALL Your
        SketchWow Designs
    </h3>
);
