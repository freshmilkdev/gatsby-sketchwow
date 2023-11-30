import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {SectionText} from "../SectionText/SectionText";
import * as styles from './BestOfAllSection.module.css'
import {StaticImage} from "gatsby-plugin-image";

export const BestOfAllSection = () => (
    <WaveHeaderSection color={'grey'}>
        <LineHeading lineColor='purple'>
            <span>Best of All: You Have Total Control</span>
        </LineHeading>
        <SectionText textGap className={styles.text}>
            <p className='font-20 font-bold'>SketchWow Animate gives you many options to customize your animations.</p>
            <p>You can control how it starts (trigger)... speed... duration... timing and order of all the snazzy
                effects you add to <br/>your presentation, visual or animated video.</p>
            <p>SketchWow Animate gives you many options to customize your animations.</p>
            <p>Here’s an example of the included settings:</p>
        </SectionText>
        <div className='text-center'>
            <StaticImage
                src="../../images/best-of-all.png"
                loading="lazy"
                width={753}
                quality={90}
                alt=""
            />
        </div>
    </WaveHeaderSection>
);
