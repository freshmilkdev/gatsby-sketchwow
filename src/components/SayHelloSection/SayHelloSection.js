import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import * as styles from './SayHelloSection.module.css';
import {StaticImage} from "gatsby-plugin-image";
import HelloSVG from "../../assets/svg/hello.inline.svg";
import ArrowSVG from "../../assets/svg/cards-arrow.inline.svg";
import {UpgradeOrderBlock} from "../UpgradeOrderBlock/UpgradeOrderBlock";

import {LineHeading} from "../LineHeading/LineHeading";
import {ImageCardList} from "./ImageCardList";
import {SectionText} from "../SectionText/SectionText";

export const SayHelloSection = () => (
    <WaveHeaderSection color={'blue'}>
        <LineHeading>
            <span>Say Hello To Your New BFF...</span>
            <HelloSVG style={{position: "absolute"}} className={styles.headingHello}/>
        </LineHeading>
        <h3 className={`${styles.subheading} font-30`}>SketchWow Animate!</h3>
        <SectionText className={`${styles.text} font-20`}>
            <u><strong>For a small one-time payment of just $79</strong></u>, you can add this “SketchWow
            Animate” add-on to your
            SketchWow software to instantly unlock loads of animated presentation, stop-motion & animated
            video-making awesomeness!
        </SectionText>
        <SectionText className={`${styles.text} font-20`}>
            With your SketchWow Animate add-on, you’ll get access to a TON of creative options to spice up your
            diagrams... visuals... content... presentations... lessons... slideshows and videos to explain just about
            anything – using super-cool-looking sketch animations!
        </SectionText>
        <UpgradeOrderBlock/>

        <div className={styles.bottomWrapper}>
            <p className={`${styles.know} font-18`} style={{fontWeight: 700}}>Know what that means?</p>
            <ImageCardList/>
            <ArrowSVG className={styles.arrow}/>
        </div>
    </WaveHeaderSection>
);
