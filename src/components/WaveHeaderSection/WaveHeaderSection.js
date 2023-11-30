import React from 'react';
import * as styles from './WaveHeaderSection.module.css';
import {Container} from "../Layout/Container/Container";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

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
export const WaveHeaderSection = ({children, color = 'blue'}) => {
    const data = useStaticQuery(graphql`
        query {
            blueWave: file(relativePath: { eq: "blue-bg-wave-top.png" }) {
                ...waveImage
            }
            greenWave: file(relativePath: { eq: "green-bg-wave-top.png" }) {
                ...waveImage
            }
            greyWave: file(relativePath: { eq: "grey-bg-wave-top.png" }) {
                ...waveImage
            }
            tealWave: file(relativePath: { eq: "teal-bg-wave-top.png" }) {
                ...waveImage
            }
            sandWave: file(relativePath: { eq: "sand-bg-wave-top.png" }) {
                ...waveImage
            }
            pinkWave: file(relativePath: { eq: "pink-bg-wave-top.png" }) {
                ...waveImage
            }
        }
    `)

    const image = getImage(data[`${color}Wave`])
    return (
        <section>
            <GatsbyImage image={image} alt={''}/>
            <div className={styles[color]}>
                <Container className={styles.container}>
                    {children}
                </Container>
            </div>
        </section>
    )


}
