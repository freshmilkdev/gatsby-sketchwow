import React from 'react';
import * as styles from './ThingsListSection.module.css'
import {Container} from "../Layout/Container/Container";
import {LineHeading} from "../LineHeading/LineHeading";

export const ThingsListSection = () => (
    <section>
        <Container>
            <LineHeading lineColor='purple'>
                <span>What Are All the Things You Can <br/> Create Using SketchWow Animate?</span>
            </LineHeading>
        </Container>
    </section>
);
