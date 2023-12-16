import React from 'react';
import * as styles from './ImageCard.module.css';

import PathSVG from "../../../assets/svg/wavy-lines/wavy-yellow-line.inline.svg";
export const ImageCard = ({heading, content, image}) => (
    <article className={styles.card}>
        <div  className={styles.image}>
            <div>{image}</div>
        </div>
        <div className={`${styles.textWrapper} font-medium`}>

            <h2 className={`${styles.heading} font-35`}>
                {heading}
                <PathSVG
                    style={{position: "absolute"}}
                    className={styles.lineImage}
                />
            </h2>
            <div className={`${styles.content} font-18`}>{content}</div>
        </div>
    </article>
);