import React from 'react';
import * as styles from './AnimateThingsGrid.module.css'
import {Container} from "../Layout/Container/Container";
import {LineHeading} from "../LineHeading/LineHeading";

import {ThingItem} from "./ThingItem";
import AnimatedTextIcon from "../../assets/svg/features-icons/animated-text.inline.svg";
import AnimatedContentIcon from "../../assets/svg/features-icons/animated-content.inline.svg";
import ShakyIcon from "../../assets/svg/features-icons/shaky-animation.inline.svg";
import YTIcon from "../../assets/svg/features-icons/yt.inline.svg";
import MultiIcon from "../../assets/svg/features-icons/multi-page.inline.svg";
import AdsIcon from "../../assets/svg/features-icons/animated-ads.inline.svg";
import PostsIcon from "../../assets/svg/features-icons/animated-posts.inline.svg";
import NonTypicalIcon from "../../assets/svg/features-icons/non-typical.inline.svg";
import WebinarIcon from "../../assets/svg/features-icons/webinar-slides.inline.svg";
import SlidesIcon from "../../assets/svg/features-icons/animated-slides.inline.svg";
export const AnimateThingsGrid = () => (
    <section className={styles.section}>
        <Container>
            <LineHeading lineColor='purple' tag={'h3'}>
                <p className={`${styles.offset} font-24 font-bold`}>Multi-frame animated GIFs or MP4 videos</p>
            </LineHeading>
            <div className={styles.features}>
                {(things || []).map((thing, ix) =>
                    <ThingItem key={`thing${ix}`} {...thing}/>)}
            </div>
        </Container>
    </section>
);
const things = [
    {
        title: 'Animated Text Videos',
        icon: <AnimatedTextIcon/>
    },
    {
        title: 'Animated Content',
        icon: <AnimatedContentIcon/>
    },
    {
        title: 'Shaky Animation',
        icon: <ShakyIcon/>
    },
    {
        title: 'YouTube Videos',
        icon: <YTIcon/>
    },
    {
        title: 'Multi-page, Animated Videos',
        icon: <MultiIcon/>
    },
    {
        title: 'Animated Ads',
        icon: <AdsIcon/>
    },
    {
        title: 'Animated Social Posts',
        icon: <PostsIcon/>
    },
    {
        title: 'Non Typical Explainer Videos',
        icon: <NonTypicalIcon/>
    },
    {
        title: 'Webinar Slides (Live Or Pre-recorded)',
        icon: <WebinarIcon/>
    },
    {
        title: 'Animated (automated) Slides/ Presentations',
        icon: <SlidesIcon/>
    }
]