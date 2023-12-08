import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {Container} from "../Layout/Container/Container";
import {SectionText} from "../SectionText/SectionText";
import * as styles from "./WatchDesignsSection.module.css";
import {StaticImage} from "gatsby-plugin-image";
import ShakeVideo from "../../videos/Shake-animate.mp4"
import DrawVideo from "../../videos/Draw-animate2.mp4"
import TextVideo from "../../videos/Text-animate.mp4"

export const WatchDesignsSection = () => (
    <section className={styles.section}>
        <Container>
            <LineHeading lineColor='yellow'>
                <span>Watch Your  <br className='mobile-only'/>Designs <i>Spring</i> <br/> To Life With Motion</span>
            </LineHeading>
            <SectionText style={{paddingTop: 40}}>You get all the standard effects that you’d expect to see (Appear,
                Fade Out, Push, Pull...etc)
                plus a few other <br/>
                "magnetic" effects that are exclusive to SketchWow animate, including...</SectionText>
            <div className={styles.row}>
                <div>
                    <video width="100%" loop autoPlay muted playsInline>
                        <source src={DrawVideo} type="video/mp4"/>
                    </video>
                    <StaticImage
                        className={styles.image}
                        src="../../images/btn-draw.png"
                        loading="lazy"
                        width={164}
                        quality={98}
                        alt=""
                    />
                    <StaticImage
                        className={styles.pointerLeft}
                        src="../../images/pointer-left.png"
                        loading="lazy"
                        width={76}
                        quality={98}
                        alt=""
                    />
                </div>
                <div>
                    <video width="100%" loop autoPlay muted playsInline>
                        <source src={ShakeVideo} type="video/mp4"/>
                    </video>
                    <StaticImage
                        className={styles.image}
                        src="../../images/btn-shake.png"
                        loading="lazy"
                        width={164}
                        quality={98}
                        alt=""
                    />
                    <StaticImage
                        className={styles.pointerRight}
                        src="../../images/pointer-right.png"
                        loading="lazy"
                        width={66}
                        quality={98}
                        alt=""
                    />
                </div>

            </div>
            <SectionText>
                <p className={'font-30 font-extrabold'}>Is that cool or what?</p><br/>
                <p>SketchWow Animate also includes a few unique Text Effects too (Typewriter and Text Jiggle) like
                    this...</p>
            </SectionText>
            <div className={styles.jiggle}>
                <div className={styles.inner}>
                    <video width="100%" loop autoPlay muted playsInline>
                        <source src={TextVideo} type="video/mp4"/>
                    </video>
                    <StaticImage
                        className={styles.btnJiggle}
                        src="../../images/btn-jiggle.png"
                        loading="lazy"
                        width={264}
                        quality={98}
                        alt=""
                    />
                    <StaticImage
                        className={styles.pointerJiggle}
                        src="../../images/pointer-left.png"
                        loading="lazy"
                        width={76}
                        quality={98}
                        alt=""
                    />
                </div>
            </div>
            <SectionText>
                <p>Just select an animation Effect and watch those words really POP!</p>
            </SectionText>
        </Container>
    </section>
);
