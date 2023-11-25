import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Hero.module.css';


export const VideoSection = () => (
    <div className={styles.videoSection}>
        <div>
            <StaticImage
                className={styles.videoImagesLeft}
                src="../../images/hero-video-left-elements.png"
                loading="lazy"
                width={68}
                quality={95}
                alt=""
            />
        </div>

        <StaticImage
            src="../../images/video-placeholder.png"
            loading="lazy"
            width={840}
            quality={95}
            alt=""
        />
        <div>
            <StaticImage
                className={styles.videoImagesRight}
                src="../../images/hero-video-right-elements.png"
                loading="lazy"
                width={77}
                quality={95}
                alt=""
            />
        </div>
    </div>
);
