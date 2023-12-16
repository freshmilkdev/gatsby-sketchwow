import React from 'react';
import * as styles from './FeaturesSection.module.css'

import BlueBubble from "../../assets/svg/features-bubbles/blue-bubble.inline.svg";
import PinkBubble from "../../assets/svg/features-bubbles/pink-bubble.inline.svg";
import OrangeBubble from "../../assets/svg/features-bubbles/orange-bubble.inline.svg";
import PurpleBubble from "../../assets/svg/features-bubbles/purple-bubble.inline.svg";
import YellowBubble from "../../assets/svg/features-bubbles/yellow-bubble.inline.svg";
import TealBubble from "../../assets/svg/features-bubbles/teal-bubble.inline.svg";


const SVGList = {
    purple:  <PurpleBubble className={styles.wrapper} />,
    pink:  <PinkBubble className={styles.wrapper} />,
    orange:  <OrangeBubble className={styles.wrapper} />,
    teal:  <TealBubble className={styles.wrapper} />,
    blue:  <BlueBubble className={styles.wrapper} />,
    yellow:  <YellowBubble className={styles.wrapper} />
}
const renderSVG = color => SVGList[color] ? SVGList[color] : SVGList['pink'];
export const Feature = ({color, title, text}) => {

    return (
        <div className={styles.featureWrapper}>
            <figure className={`${styles.feature}`}>
                {renderSVG(color)}
                <figcaption  className='font-extrabold font-18'>{title}</figcaption>
            </figure>
            <div className={`font-medium font-18 ${styles.text}`}>{text}</div>
        </div>
    );
}
