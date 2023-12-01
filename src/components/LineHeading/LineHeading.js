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
export const LineHeading = ({lineColor = 'blue', tag = 'h2', children}) => {
    const data = useStaticQuery(graphql`
        query {
            blue: file(relativePath: { eq: "wavy-lines/wavy-blue-line.png" }) {
                ...wavyLineImage
            }
            green: file(relativePath: { eq: "wavy-lines/wavy-green-line.png" }) {
                ...wavyLineImage
            }
            yellow: file(relativePath: { eq: "wavy-lines/wavy-yellow-line.png" }) {
                ...wavyLineImage
            }
            purple: file(relativePath: { eq: "wavy-lines/wavy-purple-line.png" }) {
                ...wavyLineImage
            }
            red: file(relativePath: { eq: "wavy-lines/wavy-red-line.png" }) {
                ...wavyLineImage
            }
        }
    `)
    const image = getImage(data[lineColor]);
    const Tag = tag;
    return (
        <Tag className={`${styles.heading} font-55`}>
            <GatsbyImage className={styles.headingImageLine} image={image} alt={''}/>
            {children}
        </Tag>
    );
}
