import React from 'react';
import * as styles from './WaveHeaderSection.module.css';

import {StaticImage} from "gatsby-plugin-image";
import {Container} from "../Layout/Container/Container";


//unfortunately we can't just pass the src prop dynamically
//https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image#restrictions-on-using-staticimage

function renderImage(color) {
    switch (color) {
        case 'blue':
            return (
                <StaticImage
                    src={"../../images/blue-bg-wave-top.png"}
                    loading="lazy"
                    width={1700}
                    quality={95}
                    alt=""
                />
            )
        case 'green':
            return (
                <StaticImage
                    src={"../../images/green-bg-wave-top.png"}
                    loading="lazy"
                    width={1700}
                    quality={95}
                    alt=""
                />
            )
        default:
            return (
                <StaticImage
                    src={"../../images/blue-bg-wave-top.png"}
                    loading="lazy"
                    width={1700}
                    quality={95}
                    alt=""
                />
            )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const WaveHeaderSection = ({children, color = 'blue'}) => {
    return (
        <section>
            {renderImage(color)}
            <div className={styles[`section${capitalizeFirstLetter(color)}`]}>
                <Container className={styles.container}>{children}</Container></div>
        </section>
    )


}
