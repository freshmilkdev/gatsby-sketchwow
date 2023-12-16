import React from 'react';
import * as styles from './Hero.module.css';

import YellowLineSVG from "../../assets/svg/hero-video-yellow-line.inline.svg";
import BlueLineSVG from "../../assets/svg/hero-video-blue-line.inline.svg";
import LeftElementsSVG from "../../assets/svg/hero-video-left-elements.inline.svg";
import RightElementsSVG from "../../assets/svg/hero-video-right-elements.inline.svg";
import VideoSVG from "../../assets/svg/video-banner.inline.svg";
import ArrowSVG from "../../assets/svg/hero-video-arrow.inline.svg";

export const VideoSection = () => (
    <div className={styles.videoSection}>
        <YellowLineSVG className={styles.videoImagesTop}/>
        <div className={styles.videoRow}>
            <div>
                <LeftElementsSVG className={styles.videoImagesLeft}/>
            </div>
            <div className={styles.videoWrapper}>
                <VideoSVG/>
            </div>
            <div>
                <RightElementsSVG className={styles.videoImagesRight}/>
            </div>
        </div>
        <BlueLineSVG className={styles.videoImagesBottom}/>
        <ArrowSVG style={{position: "absolute"}} className={styles.videoImagesArrow}/>
    </div>
);
