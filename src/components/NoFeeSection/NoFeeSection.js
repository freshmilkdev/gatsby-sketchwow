import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import * as styles from './NoFeeSection.module.css'
import {SectionText} from "../SectionText/SectionText";
import {UpgradeOrderButton} from "../UpgradeOrderBlock/UpgradeOrderButton/UpgradeOrderButton";
import {DashedText} from "../UpgradeOrderBlock/DashedText/DashedText";
import ScreenshotVideo from "../../videos/screenshot-resized.mp4"
import NoFeesSVG from "../../assets/svg/no-fees.inline.svg";
import DevicesSVG from "../../assets/svg/product-devices-transparent-screen.inline.svg";

export const NoFeeSection = () => (
    <WaveHeaderSection color={'sand'} withPointer>
        <LineHeading lineColor='yellow'>
            <span><i>Woot! </i>No Pesky Monthly Subscription Fees</span>
        </LineHeading>
        <div className={styles.row}>

            <SectionText textGap className={styles.text}>
                <p>As you already know... most of the big software companies have made the switch to monthly
                    subscriptions. </p>
                <p>PowerPoint, Adobe Creative Suite and other leading products… all monthly.</p>
                <p className={`${styles.price} font-24 font-black`}>
                    Other Video Animation Tools <span>Cost $29-$45 Per Month</span> (...that’s a whopping <span>$348-$540 per year!)</span>
                </p>
                <p>We might be trapped in a 2015 time capsule. Before we come to our senses and charge monthly (like
                    everyone else)...</p>
                <p>Go take advantage of this <u>one-time</u> <strong>price of just $79!</strong></p>
            </SectionText>
            <div className={styles.imgWrapper}>
                <NoFeesSVG/>
            </div>
        </div>
        <h3 className={`${styles.heading} font-24 font-black`}>Includes Free (Lifetime) Updates Too!</h3>
        <SectionText textGap style={{padding: '20px 0'}}>
            <p>Some companies charge you for every single update. Not us.</p>
            <p>Yes, we already have some plans for the next version… and yes, you’ll get all these updates at no
                cost.</p>
            <p>There are DOZENS of presentation and animation tools out there... <br/>
                <strong><u>but nothing like SketchWow Animate!</u></strong></p>
            <p>Try it. See for yourself.</p>
            <p>Go ahead and click that “Upgrade My Order” button below, right now. Then, prepare to be
                amazed at what you can do using SketchWow + SketchWow Animate.</p>
        </SectionText>
        <div style={{textAlign: 'center'}}>
            <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                    <video width="100%" loop autoPlay muted playsInline>
                        <source src={ScreenshotVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className={styles.devicesImgWrapper}>
                    <div><DevicesSVG/></div>
                </div>
            </div>
        </div>
        <UpgradeOrderButton link={'/'} afterText={'I want to add SketchWow Animate for a one-time fee of just $79.'}/>
        <DashedText>
            No thanks. I’ll pass on this SketchWow Animate add-on which includes loads of features to
            animate +
            add motion to anything I create in SketchWow and produce unique sketch animation videos,
            automated
            multi-page videos and more.
        </DashedText>
    </WaveHeaderSection>
);