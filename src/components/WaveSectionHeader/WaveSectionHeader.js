import React from 'react';
import * as styles from './WaveSectionHeader.module.css';

import {StaticImage} from "gatsby-plugin-image";

export const WaveSectionHeader = ({children}) => (
    <StaticImage
        className={styles.wave}
        src="../../images/blue-bg-shape-top.png"
        loading="lazy"
        width={1700}
        quality={95}
        alt=""
    />
);
