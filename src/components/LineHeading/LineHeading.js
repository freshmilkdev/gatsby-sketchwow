import React from 'react';

import * as styles from "./LineHeading.module.css";

import BlueLineSVG from "../../assets/svg/wavy-lines/wavy-blue-line.inline.svg";
import GreenLineSVG from "../../assets/svg/wavy-lines/wavy-green-line.inline.svg";
import PurpleLineSVG from "../../assets/svg/wavy-lines/wavy-purple-line.inline.svg";
import RedLineSVG from "../../assets/svg/wavy-lines/wavy-red-line.inline.svg";
import YellowLineSVG from "../../assets/svg/wavy-lines/wavy-yellow-line.inline.svg";

const SVGList = {
    blue: <BlueLineSVG className={styles.headingImageLine}/>,
    green: <GreenLineSVG className={styles.headingImageLine}/>,
    purple: <PurpleLineSVG className={styles.headingImageLine}/>,
    red: <RedLineSVG className={styles.headingImageLine}/>,
    yellow: <YellowLineSVG className={styles.headingImageLine}/>
}
const renderSVG = color => SVGList[color] ? SVGList[color] : SVGList['blue'];
export const LineHeading = ({lineColor = 'blue', tag = 'h2', children}) => {

    const Tag = tag;
    return (
        <Tag className={`${styles.heading} font-55`}>
            {renderSVG(lineColor)}
            {children}
        </Tag>
    );
}
