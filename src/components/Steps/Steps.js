import React from 'react';
import {StepRow} from "./StepRow";
import {Container} from "../Layout/Container/Container";
import * as styles from './Steps.module.css';
import {StaticImage} from "gatsby-plugin-image";
import {SectionText} from "../SectionText/SectionText";
import StepsSVG from "../../assets/svg/steps-only.inline.svg";
const steps = [
    {
        title: 'Export',
        description: 'Export the image from SketchWow'
    },
    {
        title: 'Import',
        description: <span>Import image into PowerPoint or your <br/> animation or whiteboard video software</span>
    },
    {
        title: 'Add Animations',
        description: 'Add all the triggers, effects (or draw paths), actions, timing, speed, transitions, etc.'
    },
    {
        title: 'Repeat',
        description: 'Repeat Steps 1 - 3 for every image, slide, page or video frame'
    },
]
export const Steps = () => (
    <section>
        <Container>
            <div className={styles.wrapper}>
                <StepsSVG style={{position: "absolute"}} className={styles.image}/>
                <ul className={styles.steps}>
                    {steps.map((step, ix) =>
                        <StepRow {...step} key={`step${ix}`} index={ix + 1}/>)}
                </ul>
            </div>
            <div style={{textAlign: "center"}}>
                <SectionText textGap>
                    <p>Can you see how this wastes a lot of time?</p>
                    <p>Here at SketchWow, we have no desire to create a dated and bloated app like PowerPoint.</p>
                    <p>Nor do we want to make complex and costly video animation apps like Adobe</p>
                    <p>We prefer to keep things simple and affordable.</p>
                    <p className='font-bold'>If you love the thought of turning SketchWow into a cool animated video
                        maker</p>
                    <p>(without toggling back and forth between 2-3 apps)... then I have great news!</p>
                    <p>I know you’ll be excited to hear about our new SketchWow add-on.</p>
                </SectionText>
            </div>
        </Container>
    </section>
);
