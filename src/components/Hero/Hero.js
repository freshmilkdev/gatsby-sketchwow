import React from 'react';

import {HeroHeading} from "./HeroHeading";
import * as styles from './Hero.module.css';
import {Container} from "../Layout/Container/Container";
import {HeroSubheading} from "./HeroSubheading";
import {VideoSection} from "./VideoSection";
import {SectionText} from "../SectionText/SectionText";

export const Hero = () => (
    <section className={styles.hero}>
        <Container>
            <HeroHeading text='Wait! Special Offer:'/>
            <div className={styles.wrapper}>
                <HeroSubheading/>
                <p className={`${styles.text} font-24`}>
                    Now It’s Easier Than Ever To Create Super-Engaging Sketch Animations, Animated
                    Presentations & Videos <span style={{textDecoration: 'underline'}}>Without</span> Being a Pro
                    Animator Or Designer!
                </p>
                <VideoSection/>
                <SectionText>
                    <p style={{fontWeight: 700, fontSize: '1.375rem'}}>I know you are excited to jump-in and use SketchWow.</p>
                    <p>Before you do that… please give this a quick read…</p>
                    <p>“Can I add, edit & animate my SketchWow designs directly in PowerPoint or my video animation software?”</p>
                    <p>A couple challenges here…</p>
                    <p>Challenge #1: SketchWow is not designed to make full-animation or whiteboard videos</p>
                    <p>Challenge #2: It’s impossible for us to integrate with every presentation and video animation <br/> app on
                        the market</p>
                    <p style={{textDecoration: "underline"}}>However... we recently REMOVED these problems with a much easier
                        solution.</p>
                    <p> Keep reading for details…</p>
                    <p> Currently, it takes 4 steps to make animations from your SketchWow designs...</p>
                </SectionText>
            </div>
        </Container>
    </section>
);
