import React from 'react';
import {WaveSectionHeader} from "../WaveSectionHeader/WaveSectionHeader";
import * as styles from './SayHelloSection.module.css';
import {Container} from "../Layout/Container/Container";
import {StaticImage} from "gatsby-plugin-image";

import {UpgradeOrderBlock} from "../UpgradeOrderBlock/UpgradeOrderBlock";
import {ImageCard} from "./ImageCard/ImageCard";


export const SayHelloSection = () => (<section>
    <WaveSectionHeader/>
    <div className={styles.section}>
        <Container className={styles.container}>
            <h2 className={`${styles.heading} font-55`}>
                <StaticImage
                    style={{position: "absolute"}}
                    className={styles.headingImageLine}
                    src="../../images/order-blue-line.png"
                    loading="lazy"
                    width={268}
                    quality={95}
                    alt=""
                />

                <span>Say Hello To Your New BFF…</span>
                <StaticImage
                    style={{position: "absolute"}}
                    className={styles.headingHello}
                    src="../../images/hello.png"
                    loading="lazy"
                    width={189}
                    quality={95}
                    alt=""
                />
            </h2>
            <h3 className={`${styles.subheading} font-30`}>SketchWow Animate!</h3>
            <p className={`${styles.text} font-20`}>
                <u><strong>For a small one-time payment of just $79</strong></u>, you can add this “SketchWow
                Animate” add-on to your
                SketchWow software to instantly unlock loads of animated presentation, stop-motion & animated
                video-making awesomeness!
            </p>
            <p className={`${styles.text} font-20`}>
                With your SketchWow Animate add-on, you’ll get access to a TON of creative options to spice up your
                diagrams… visuals… content… presentations… lessons… slideshows and videos to explain just about
                anything – using super-cool-looking sketch animations!
            </p>
            <UpgradeOrderBlock/>

            <div>
                <p className={`${styles.know} font-18`} style={{fontWeight: 700}}>Know what that means?</p>
                <ImageCard image={
                    <StaticImage
                        src="../../images/skull-circle.png"
                        loading="lazy"
                        width={432}
                        quality={95}
                        alt=""
                    />}
                           heading={'No More Death-By-Power Point…  Like Ever'}
                           content={<>
                               <p>Plus, adding SketchWow Animate makes SkechWow even MORE fun to use. <br/>
                                   <span style={{fontStyle: 'italic'}}>(... never thought that was possible, until we
                                           proved ourselves wrong!)</span>
                               </p>

                               <p>There are dozens of presentation and animation tools out there… but as you’ll
                                   soon <br/> find out, there’s NOTHING like SketchWow Animate!</p>
                               <p>
                                   Keep reading to see some of the unique, eye-popping animations you can create
                                   only <br/>
                                   <span style={{fontWeight: 600}}><u>using SketchWow Animate!</u></span>
                               </p>
                           </>}
                />
                <ImageCard image={
                    <StaticImage
                        src="../../images/laptop-circle.png"
                        loading="lazy"
                        width={432}
                        quality={95}
                        alt=""
                    />}
                           heading={'How Does SketchWow Animate Work?'}
                           content={<>
                               <p>Once you purchase the SketchWow Animate add-on, a new “Animate” button will be enabled
                                   in SketchWow on the top toolbar.</p>

                               <p>Click it… that’s when the magic happens!</p>
                               <p>
                                   Next, you can add animation and movement to any element, shape, text, page or imported image.
                               </p>
                           </>}
                />
            </div>
        </Container>
    </div>
</section>);
