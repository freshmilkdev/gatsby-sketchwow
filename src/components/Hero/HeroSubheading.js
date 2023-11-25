import React from 'react';
import * as styles from './Hero.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const HeroSubheading = ({text}) => (
    <h3 className={styles.subheading}>
        Imagine If… In 2 Mouse Clicks, You Can <span className={styles.underline}>
            Instantly
            <StaticImage
                className={styles.underlineImage}
                src="../../images/underline.png"
                loading="lazy"
                width={149}
                quality={85}
                alt=""
            />
        </span> Add Eye-Catching Animations, Effects & Motion To
        ALL Your
        SketchWow Designs
    </h3>
);
