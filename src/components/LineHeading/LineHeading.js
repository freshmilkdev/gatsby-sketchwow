import React from 'react';

import * as styles from "./LineHeading.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

export const fluidImage = graphql`
    fragment wavyLineImage on File {
        childImageSharp {
            gatsbyImageData(
                width: 268
                placeholder: BLURRED
            )
        }
    }
`;
export const LineHeading = ({lineColor = 'blue', children}) => {
    const data = useStaticQuery(graphql`
        query {
            blue: file(relativePath: { eq: "wavy-blue-line.png" }) {
                ...wavyLineImage
            }
            green: file(relativePath: { eq: "wavy-green-line.png" }) {
                ...wavyLineImage
            }
            yellow: file(relativePath: { eq: "wavy-yellow-line.png" }) {
                ...wavyLineImage
            }
        }
    `)
    const image = getImage(data[lineColor]);
    return (
        <h2 className={`${styles.heading} font-55`}>
            <GatsbyImage style={{maxWidth: 268, marginBottom: 8}} image={image} alt={''}/>
            {children}
        </h2>
    );
}
