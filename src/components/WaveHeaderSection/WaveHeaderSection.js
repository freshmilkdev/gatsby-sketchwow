import React from 'react';
import * as styles from './WaveHeaderSection.module.css';
import {Container} from "../Layout/Container/Container";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const fluidImage = graphql`
    fragment fluidImage on File {
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
                ...fluidImage
            }
            greenWave: file(relativePath: { eq: "green-bg-wave-top.png" }) {
                ...fluidImage
            }
        }
    `)

    const image = getImage(data[`${color}Wave`])
    return (
        <section>
            <GatsbyImage image={image} alt={''}/>
            <div className={styles[`section${capitalizeFirstLetter(color)}`]}>
                <Container className={styles.container}>
                    {children}
                </Container>
            </div>
        </section>
    )


}
