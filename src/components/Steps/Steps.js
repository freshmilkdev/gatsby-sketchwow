import React from 'react';
import {StepRow} from "./StepRow";
import {Container} from "../Layout/Container/Container";
import * as styles from './Steps.module.css';
import {StaticImage} from "gatsby-plugin-image";

export const Steps = () => (
    <section>
        <Container>
            <div className={styles.wrapper}>
                <StaticImage
                    className={styles.image}
                    src="../../images/steps.png"
                    loading="lazy"
                    width={1300}
                    quality={95}
                    alt=""
                />
                <ul className={styles.steps}>
                    <StepRow title='Export' description='Export the image from SketchWow'/>
                    <StepRow title='Import'
                             description={
                                 <span>
                                Import image into PowerPoint or your <br/> animation or whiteboard video software
                            </span>
                             }/>
                    <StepRow title='Add Animations'
                             description='Add all the triggers, effects (or draw paths), actions, timing, speed, transitions, etc.'/>
                    <StepRow title='Repeat'
                             description='Repeat Steps 1- 3 for every image, slide, page or video frame'/>
                </ul>
            </div>
        </Container>
    </section>
);
