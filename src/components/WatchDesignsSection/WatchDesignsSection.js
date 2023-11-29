import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {Container} from "../Layout/Container/Container";
import {SectionText} from "../SectionText/SectionText";


export const WatchDesignsSection = () => (
    <section style={{paddingTop: 100}}>
        <Container>
            <LineHeading lineColor='yellow'>
                <span>Watch Your Designs <i>Spring</i> <br/> To Life With Motion</span>
            </LineHeading>
            <SectionText>You get all the standard effects that you’d expect to see (Appear, Fade Out, Push, Pull…etc)
                plus a few other <br/>
                "magnetic" effects that are exclusive to SketchWow animate, including...</SectionText>

            <SectionText>
                <span>Is that cool or what?</span><br/>
                SketchWow Animate also includes a few unique Text Effects too (Typewriter and Text Jiggle) like this...
            </SectionText>
        </Container>
    </section>
);
