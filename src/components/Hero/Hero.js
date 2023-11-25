import React from 'react';

import {HeroHeading} from "./HeroHeading";
import * as styles from './Hero.module.css';
import {Container} from "../Layout/Container/Container";
import {HeroSubheading} from "./HeroSubheading";

export const Hero = () => (
    <section className={styles.hero}>
        <Container>
            <HeroHeading text='Wait! Special Offer:'/>
            <div className={styles.wrapper}>
                <HeroSubheading/>
                <p className={styles.text}>
                    Now It’s Easier Than Ever To Create Super-Engaging Sketch Animations, Animated
                    Presentations & Videos <span style={{textDecoration: 'underline'}}>Without</span> Being a Pro Animator Or Designer!
                </p>
            </div>
        </Container>
    </section>
);
