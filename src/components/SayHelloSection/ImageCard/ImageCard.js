import React from 'react';
import * as styles from './ImageCard.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const ImageCard = ({heading, content, image}) => (
    <article className={styles.card}>
        <div  className={styles.image}>{image}</div>
        <div className={`${styles.textWrapper} font-medium`}>

            <h2 className={`${styles.heading} font-36`}>
                {heading}
                <StaticImage
                    style={{position: "absolute"}}
                    className={styles.lineImage}
                    src="../../../images/wavy-lines/yellow-path-line.png"
                    loading="lazy"
                    width={268}
                    quality={95}
                    alt=""
                />
            </h2>
            <div className={`${styles.content} font-18`}>{content}</div>
        </div>
    </article>
);