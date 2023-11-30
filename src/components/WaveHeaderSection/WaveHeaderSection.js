import React from 'react';
import * as styles from './WaveHeaderSection.module.css';
import {Container} from "../Layout/Container/Container";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";

export const waveImage = graphql`
    fragment waveImage on File {
        childImageSharp {
            gatsbyImageData(
                width: 1700
                layout: FULL_WIDTH
                placeholder: BLURRED
            )
        }
    }
`;
export const WaveHeaderSection = ({children, color = 'blue', withPointer = false}) => {
    const data = useStaticQuery(graphql`
        query {
            blueWave: file(relativePath: { eq: "wave-bg/blue-bg-wave-top.png" }) {
                ...waveImage
            }
            greenWave: file(relativePath: { eq: "wave-bg/green-bg-wave-top.png" }) {
                ...waveImage
            }
            greyWave: file(relativePath: { eq: "wave-bg/grey-bg-wave-top.png" }) {
                ...waveImage
            }
            tealWave: file(relativePath: { eq: "wave-bg/teal-bg-wave-top.png" }) {
                ...waveImage
            }
            sandWave: file(relativePath: { eq: "wave-bg/sand-bg-wave-top.png" }) {
                ...waveImage
            }
            pinkWave: file(relativePath: { eq: "wave-bg/pink-bg-wave-top.png" }) {
                ...waveImage
            }
        }
    `)

    const image = getImage(data[`${color}Wave`])
    return (
        <section>
            <div className={styles.inner}>
                {withPointer ?
                    <StaticImage
                        className={styles.pointer}
                        style={{position: 'absolute'}}
                        src="../../images/pointer-left.png"
                        loading="lazy"
                        width={76}
                        quality={98}
                        alt=""
                    /> : null}
                <GatsbyImage image={image} alt={''} className={styles.wrapper}/>
            </div>
            <div className={styles[color]}>
                <Container className={styles.container}>
                    {children}
                </Container>
            </div>
        </section>
    )
}
