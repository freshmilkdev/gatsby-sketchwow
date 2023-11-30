import React from 'react';
import * as styles from './ThingsListSection.module.css'
import {Container} from "../Layout/Container/Container";
import {LineHeading} from "../LineHeading/LineHeading";

export const ThingsListSection = () => (
    <section className={styles.section}>
        <Container>
            <LineHeading lineColor='purple' tag={'h5'}>
                <p className={`${styles.offset} font-24 font-bold`}>Multi-frame animated GIFs or MP4 videos</p>
            </LineHeading>
        </Container>
    </section>
);
