import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {Container} from "../Layout/Container/Container";
import {StaticImage} from "gatsby-plugin-image";
import {ReasonCard} from "./ReasonCard";
import * as styles from './TenReasons.module.css';

export const TenReasonsSection = () => (
    <section>
        <Container>
            <LineHeading lineColor='yellow'>
                <span>10 Reasons  <br className='mobile-only'/> Why You Need <br/>SketchWow Animate  <br className='mobile-only'/> In Your Life...</span>
            </LineHeading>
            <div className={styles.reasons}>
                {reasons.map((reason, ix) =>
                    <ReasonCard key={`reason${ix}`}{...reason}/>)}
            </div>
            <p className='font-20 text-center font-bold'>Not to mention… save yourself from buying (and learning) more video animation or presentation tools. <br/>
                Not needed once you get SkechWow Animate.</p>
        </Container>
    </section>
);

const reasons = [
    {
        title: <>Create Gorgeous, <br/> Catchy, Animated <br/> Visual Content</>,
        icon: <StaticImage
            src="../../images/reasons-icons/create-content.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Clearly Communicate <br/> Your Big Ideas With <br/> Motion</>,
        icon: <StaticImage
            src="../../images/reasons-icons/clearly-communicate.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Break-free From <br/>Typical Explainer, <br/> Doodle or Whiteboard <br/> Videos</>,
        icon: <StaticImage
            src="../../images/reasons-icons/whiteboard-videos.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Avoid Overused Stock <br/> Videos Or Images That <br/> Get Ignored</>,
        icon: <StaticImage
            src="../../images/reasons-icons/avoid-stock.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Make Fun, Personal, <br/> Creative Presentations <br/> Without That “Clinical” Look</>,
        icon: <StaticImage
            src="../../images/reasons-icons/make-fun.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Visually Communicate <br/> Anything (With Motion) <br/> In a Unique Way</>,
        icon: <StaticImage
            src="../../images/reasons-icons/visually-communicate.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Zero Video Making or <br/> Animation Skills <br/> Required</>,
        icon: <StaticImage
            src="../../images/reasons-icons/zero-video-making.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Create Cool, <br/> Captivating Animated <br/> Videos With Ease</>,
        icon: <StaticImage
            src="../../images/reasons-icons/create-tool.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },
    {
        title: <>Add Creativity & <br/> Personality To Any <br/> Video</>,
        icon: <StaticImage
            src="../../images/reasons-icons/add-creativity.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },

    {
        title: <>You could definitely <br/> use more FUN in your <br/> life (heck, who <br/> doesn’t?)</>,
        icon: <StaticImage
            src="../../images/reasons-icons/more-fun.png"
            loading="lazy"
            width={148}
            quality={100}
            alt=""
        />
    },

]