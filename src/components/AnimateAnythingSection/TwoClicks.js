import React from 'react';

import {StaticImage} from "gatsby-plugin-image";
import * as styles from './AnimateAnythingSection.module.css'
import {Container} from "../Layout/Container/Container";

export const TwoClicks = () => (
    <Container>
        <div className={`${styles.clicks} font-24 font-bold`}>
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
        </div>
    </Container>
);