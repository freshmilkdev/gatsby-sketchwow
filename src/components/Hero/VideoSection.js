import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Hero.module.css';


export const VideoSection = () => (
    <div className={styles.videoSection}>
        <StaticImage
            className={styles.videoImagesTop}
            src="../../images/hero-video-yellow-line.png"
            loading="lazy"
            width={96}
            quality={95}
            alt=""
        />
        <div className={styles.videoRow}>
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
        <StaticImage
            className={styles.videoImagesBottom}
            src="../../images/hero-video-blue-line.png"
            loading="lazy"
            width={96}
            quality={95}
            alt=""
        />
        <StaticImage
            className={styles.videoImagesArrow}
            src="../../images/hero-video-arrow.png"
            loading="lazy"
            width={106}
            quality={95}
            alt=""
        />
    </div>
);
