import React from 'react';
import * as styles from './WaveHeaderSection.module.css';
import {Container} from "../Layout/Container/Container";


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//unfortunately we can't just pass the src prop dynamically
//https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image#restrictions-on-using-staticimage
export const WaveHeaderSection = ({children, headerImage, color = 'blue'}) => {
    return (
        <section>
            {headerImage}
            <div className={styles[`section${capitalizeFirstLetter(color)}`]}>
                <Container className={styles.container}>{children}</Container></div>
        </section>
    )


}
