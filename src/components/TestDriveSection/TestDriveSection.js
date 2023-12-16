import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {SectionText} from "../SectionText/SectionText";
import TestDriveSVG from "../../assets/svg/test-drive.inline.svg";
import SpeakerSVG from "../../assets/svg/speaker.inline.svg";
import * as styles from './TestDriveSection.module.css'
import {UpgradeOrderButton} from "../UpgradeOrderBlock/UpgradeOrderButton/UpgradeOrderButton";

export const TestDriveSection = () => (
    <WaveHeaderSection color={'pink'} withPointer>
        <LineHeading lineColor='red'>
            <span>Start Creating <br
                className='mobile-only'/>Not-So-Perfect <br/><u>Animations That Stand Out!</u></span>
        </LineHeading>
        <SectionText textGap className={styles.text}>
            <p>It’s no secret...</p>
            <p>Your audience is numb to typical looking animations</p>
            <p>Hopefully by now you can see how SketchWow Animate creates truly unique <br/> and catchy animations. <u>There’s
                nothing like it.</u></p>
            <p>
                Your audience will LOVE them… and they will pay attention once they see what you <br/> have created
                using SketchWow Animate!
            </p>
            <p>
                Don’t take our word for it... why don’t you be the judge.
            </p>
        </SectionText>
        <LineHeading lineColor='red'>
            <span>Take “Animate” For a 30-Day Test Drive.</span>
        </LineHeading>
        <div className={styles.row}>
            <div className={styles.imgWrapper}>
                <div>
                    <TestDriveSVG
                        className={styles.image}

                    />
                </div>
            </div>
            <SectionText textGap style={{textAlign: 'left'}}>
                <p>All I’m asking you to do today is say “...maybe”</p>
                <p>
                    During this initial rollout… we are making SketchWow Animate <br/>
                    available for a <strong>one-time payment of just $79. ZERO <br/>
                    monthly/yearly fees, ever.</strong>
                </p>
                <p>Use SketchWow Animate for a month.</p>
                <p>Try it out. See if you like it?</p>
                <p>If you pass on this... you’ll never know what you could be missing out on.</p>
                <p>In this day and age of shrinking attention spans… <i>you gotta do everything you can to
                    cutthrough-the-clutter.</i></p>
                <p>That’s EXACTLY what SketchWow Animate was designed to do.</p>
                <p><strong>Give it a go for 1-month...</strong> and then let me know if you agree.</p>
                <p>
                    If you change your mind for any reason at all… no sweat. Contact our support team within 30 days
                    from today for a complete refund. No questions. No hard feelings. No drama… we promise.
                </p>
                <p>Just click that button below… and the “Animate” add-on will be added to your SketchWow software.</p>
            </SectionText>
        </div>
        <UpgradeOrderButton link={'/'} afterText={<i>Ok... still considering if you should buy this thing?</i>}/>
        <SectionText textGap>
            <p>Here are a couple more reasons why <u>this is an amazing must-have deal!</u></p>
        </SectionText>
        <div className={styles.speakerWrapper}>
            <SpeakerSVG className={styles.speakerImage}/>
        </div>
    </WaveHeaderSection>
);