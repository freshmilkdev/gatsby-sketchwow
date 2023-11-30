import React from 'react';
import * as styles from './FeaturesSection.module.css'
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export const featureBubbleImage = graphql`
    fragment featureBubbleImage on File {
        childImageSharp {
            gatsbyImageData(
                width: 228
                placeholder: BLURRED
            )
        }
    }
`;
export const Feature = ({color, title, text}) => {
    const data = useStaticQuery(graphql`
        query {
            purple: file(relativePath: { eq: "features-bubbles/purple.png" }) {
                ...featureBubbleImage
            }
            pink: file(relativePath: { eq: "features-bubbles/pink.png" }) {
                ...featureBubbleImage
            }
            orange: file(relativePath: { eq: "features-bubbles/orange.png" }) {
                ...featureBubbleImage
            }
            teal: file(relativePath: { eq: "features-bubbles/teal.png" }) {
                ...featureBubbleImage
            }
            blue: file(relativePath: { eq: "features-bubbles/blue.png" }) {
                ...featureBubbleImage
            }
            yellow: file(relativePath: { eq: "features-bubbles/yellow.png" }) {
                ...featureBubbleImage
            }
        }
    `)
    const image = getImage(data[`${color}`]);

    return (
        <div className={styles.featureWrapper}>
            <figure className={`${styles.feature}`}>
                <GatsbyImage image={image} alt={''} className={styles.wrapper} style={{position: "absolute"}}/>
                <figcaption  className='font-extrabold font-18'>{title}</figcaption>
            </figure>
            <div className={`font-medium font-18 ${styles.text}`}>{text}</div>
        </div>
    );
}
