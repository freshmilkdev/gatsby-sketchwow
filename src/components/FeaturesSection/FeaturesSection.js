import React from 'react';
import * as styles from './FeaturesSection.module.css'
import {Container} from "../Layout/Container/Container";
import {LineHeading} from "../LineHeading/LineHeading";
import {StaticImage} from "gatsby-plugin-image";
import {Feature} from "./Feature";


export const FeaturesSection = () => (
    <section className={styles.section}>
        <Container>
            <LineHeading lineColor='purple' tag={'h5'}>
                <p className={`${styles.offset} font-24 font-bold`}>Multi-frame animated GIFs or MP4 videos</p>
            </LineHeading>
            <div className={styles.features}>
                {(features || []).map((feature, ix) =>
                    <Feature key={`feature${ix}`} {...feature}/>)}
            </div>
        </Container>
    </section>
);
const features = [
    {
        title: 'Animated Text Videos',
        icon: <StaticImage
            src="../../images/features-icons/animated-text.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Animated Content',
        icon: <StaticImage
            src="../../images/features-icons/animated-content.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Shaky Animation',
        icon: <StaticImage
            src="../../images/features-icons/shaky-animation.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'YouTube Videos',
        icon: <StaticImage
            src="../../images/features-icons/yt-videos.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Multi-page, Animated Videos',
        icon: <StaticImage
            src="../../images/features-icons/multi-page.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Animated Ads',
        icon: <StaticImage
            src="../../images/features-icons/animated-ads.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Animated Social Posts',
        icon: <StaticImage
            src="../../images/features-icons/animated-posts.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Non Typical Explainer Videos',
        icon: <StaticImage
            src="../../images/features-icons/non-typical.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Webinar Slides (Live Or Pre-recorded)',
        icon: <StaticImage
            src="../../images/features-icons/webinar-slides.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    },
    {
        title: 'Animated (automated) Slides/ Presentations',
        icon: <StaticImage
            src="../../images/features-icons/animated-slides.png"
            loading="lazy"
            width={145}
            quality={95}
            alt=""
        />
    }
]