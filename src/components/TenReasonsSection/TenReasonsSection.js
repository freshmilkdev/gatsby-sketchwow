import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {Container} from "../Layout/Container/Container";

import {ReasonCard} from "./ReasonCard";
import * as styles from './TenReasons.module.css';
import CreateIcon from "../../assets/svg/reasons-icons/create.inline.svg";
import AvoidIcon from "../../assets/svg/reasons-icons/avoid.inline.svg";
import ClearlyIcon from "../../assets/svg/reasons-icons/clearly.inline.svg";
import WhiteboardIcon from "../../assets/svg/reasons-icons/whiteboard-videos.inline.svg";
import CreateCoolIcon from "../../assets/svg/reasons-icons/create-cool.inline.svg";
import CreativityIcon from "../../assets/svg/reasons-icons/creativity.inline.svg";
import FunIcon from "../../assets/svg/reasons-icons/fun.inline.svg";
import MoreFunIcon from "../../assets/svg/reasons-icons/more-fun.inline.svg";
import VisuallyIcon from "../../assets/svg/reasons-icons/visually.inline.svg";
import ZeroIcon from "../../assets/svg/reasons-icons/zero.inline.svg";

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
        icon: <CreateIcon/>
    },
    {
        title: <>Clearly Communicate <br/> Your Big Ideas With <br/> Motion</>,
        icon: <ClearlyIcon/>
    },
    {
        title: <>Break-free From <br/>Typical Explainer, <br/> Doodle or Whiteboard <br/> Videos</>,
        icon: <WhiteboardIcon/>
    },
    {
        title: <>Avoid Overused Stock <br/> Videos Or Images That <br/> Get Ignored</>,
        icon: <AvoidIcon/>
    },
    {
        title: <>Make Fun, Personal, <br/> Creative Presentations <br/> Without That “Clinical” Look</>,
        icon: <FunIcon/>
    },
    {
        title: <>Visually Communicate <br/> Anything (With Motion) <br/> In a Unique Way</>,
        icon: <VisuallyIcon/>
    },
    {
        title: <>Zero Video Making or <br/> Animation Skills <br/> Required</>,
        icon: <ZeroIcon/>
    },
    {
        title: <>Create Cool, <br/> Captivating Animated <br/> Videos With Ease</>,
        icon: <CreateCoolIcon/>
    },
    {
        title: <>Add Creativity & <br/> Personality To Any <br/> Video</>,
        icon: <CreativityIcon/>
    },

    {
        title: <>You could definitely <br/> use more FUN in your <br/> life (heck, who <br/> doesn’t?)</>,
        icon: <MoreFunIcon/>
    },

]