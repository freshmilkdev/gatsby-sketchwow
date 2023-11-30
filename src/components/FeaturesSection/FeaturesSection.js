import React from 'react';
import * as styles from './FeaturesSection.module.css'
import {Container} from "../Layout/Container/Container";
import {LineHeading} from "../LineHeading/LineHeading";
import {StaticImage} from "gatsby-plugin-image";

import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";


export const FeaturesSection = () => (
    <WaveHeaderSection color={'teal'}>
        <LineHeading lineColor='blue'>
            <span>Creating Ahh-mazing Animations <br/>Has Never Been Easier!</span>
        </LineHeading>
    </WaveHeaderSection>
);
