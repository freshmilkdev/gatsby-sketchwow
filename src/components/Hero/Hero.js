import React from 'react';

import {HeroHeading} from "./HeroHeading";
import * as styles from './Hero.module.css';
import {Container} from "../Layout/Container/Container";
import {HeroSubheading} from "./HeroSubheading";

export const Hero = () => (
    <section className={styles.hero}>
        <Container>
            <HeroHeading text='Wait! Special Offer:'/>
            <HeroSubheading/>
        </Container>
    </section>
);
