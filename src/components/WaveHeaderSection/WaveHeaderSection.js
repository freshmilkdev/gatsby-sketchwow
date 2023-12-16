import React from 'react';
import * as styles from './WaveHeaderSection.module.css';
import {Container} from "../Layout/Container/Container";

import BlueWaveSVG from "../../assets/svg/wave-bg/blue-bg-wave-top.inline.svg";
import GreenWaveSVG from "../../assets/svg/wave-bg/green-bg-wave-top.inline.svg";
import GreyWaveSVG from "../../assets/svg/wave-bg/grey-bg-wave-top.inline.svg";
import NavyWaveSVG from "../../assets/svg/wave-bg/navy-bg-wave-top.inline.svg";
import PinkWaveSVG from "../../assets/svg/wave-bg/pink-bg-wave-top.inline.svg";
import SandWaveSVG from "../../assets/svg/wave-bg/sand-bg-wave-top.inline.svg";
import TealWaveSVG from "../../assets/svg/wave-bg/teal-bg-wave-top.inline.svg";

import PointerLeftSVG from "../../assets/svg/pointer-left.inline.svg";

const SVGList = {
    'blue': <BlueWaveSVG className={styles.wrapper}/>,
    'green': <GreenWaveSVG className={styles.wrapper}/>,
    'grey': <GreyWaveSVG className={styles.wrapper}/>,
    'navy': <NavyWaveSVG className={styles.wrapper}/>,
    'pink': <PinkWaveSVG className={styles.wrapper}/>,
    'sand': <SandWaveSVG className={styles.wrapper}/>,
    'teal': <TealWaveSVG className={styles.wrapper}/>,
}
const renderSVG = color => SVGList[color] ? SVGList[color] : SVGList['blue'];
export const WaveHeaderSection = ({children, color = 'blue', withPointer = false}) => {

    return (
        <section>
            <div className={styles.inner}>
                {withPointer ?
                    <PointerLeftSVG className={styles.pointer} style={{position: 'absolute'}}/> : null}
                {renderSVG(color)}
            </div>
            <div className={styles[color]}>
                <Container className={styles.container}>
                    {children}
                </Container>
            </div>
        </section>
    )
}
