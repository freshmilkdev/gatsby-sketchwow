import React from 'react';

import {Container} from "../Layout/Container/Container";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from "./UpgradeOrderSection.module.css";
import {UpgradeOrderButton} from "./UpgradeOrderButton/UpgradeOrderButton";
import {DashedText} from "./DashedText/DashedText";


export const UpgradeOrderSection = () => (
    <section>
        <StaticImage
            src="../../images/blue-bg-shape-top.png"
            loading="lazy"
            width={1700}
            quality={95}
            alt=""
        />
        <div className={styles.section}>
            <Container className={styles.container}>
                <h2 className={styles.heading}>
                    <StaticImage
                        className={styles.headingImageLine}
                        src="../../images/order-blue-line.png"
                        loading="lazy"
                        width={268}
                        quality={95}
                        alt=""
                    />

                    <span>Say Hello To Your New BFF…</span>
                    <StaticImage
                        className={styles.headingHello}
                        src="../../images/hello.png"
                        loading="lazy"
                        width={189}
                        quality={95}
                        alt=""
                    />
                </h2>
                <h3 className={styles.subheading}>SketchWow Animate!</h3>
                <p className={styles.text}>
                    <u><strong>For a small one-time payment of just $79</strong></u>, you can add this “SketchWow
                    Animate” add-on to your
                    SketchWow software to instantly unlock loads of animated presentation, stop-motion & animated
                    video-making awesomeness!
                </p>
                <p className={styles.text}>
                    With your SketchWow Animate add-on, you’ll get access to a TON of creative options to spice up your
                    diagrams… visuals… content… presentations… lessons… slideshows and videos to explain just about
                    anything – using super-cool-looking sketch animations!
                </p>
                <UpgradeOrderButton link={'/'}/>
                <h4 className={styles.promo}>
                    I want to add SketchWow Animate for a one-time fee of just $79.
                </h4>
                <DashedText>
                    No thanks. I’ll pass on this SketchWow Animate add-on which includes loads of features to
                    animate +
                    add motion to anything I create in SketchWow and produce unique sketch animation videos,
                    automated
                    multi-page videos and more.
                </DashedText>
            </Container>
        </div>
    </section>
);
