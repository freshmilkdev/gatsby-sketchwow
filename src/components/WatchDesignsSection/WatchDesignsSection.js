import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {Container} from "../Layout/Container/Container";
import {SectionText} from "../SectionText/SectionText";
import * as styles from "./WatchDesignsSection.module.css";
import {StaticImage} from "gatsby-plugin-image";


export const WatchDesignsSection = () => (
    <section style={{paddingTop: 100}}>
        <Container>
            <LineHeading lineColor='yellow'>
                <span>Watch Your Designs <i>Spring</i> <br/> To Life With Motion</span>
            </LineHeading>
            <SectionText>You get all the standard effects that you’d expect to see (Appear, Fade Out, Push, Pull…etc)
                plus a few other <br/>
                "magnetic" effects that are exclusive to SketchWow animate, including...</SectionText>
            <div className={styles.row}>
                <StaticImage
                    className={styles.left}
                    src="../../images/watch-left.png"
                    loading="lazy"
                    width={620}
                    quality={98}
                    alt=""
                />
                <StaticImage
                    src="../../images/watch-right.png"
                    loading="lazy"
                    width={672}
                    quality={98}
                    alt=""
                />
            </div>
            <SectionText>
                <p className={'font-30 font-extrabold'}>Is that cool or what?</p><br/>
                <p>SketchWow Animate also includes a few unique Text Effects too (Typewriter and Text Jiggle) like
                    this...</p>
            </SectionText>
            <div className={styles.jingle}>
                <StaticImage
                    className={styles.left}
                    src="../../images/watch-jingle.png"
                    loading="lazy"
                    width={1040}
                    quality={98}
                    alt=""
                />
            </div>
            <SectionText>
                <p>Just select an animation Effect and watch those words really POP!</p>
            </SectionText>
        </Container>
    </section>
);
