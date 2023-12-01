import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {BonusRow} from "./BonusRow";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './BonusesSection.module.css';

export const BonusesSection = () => (<WaveHeaderSection color={'sand'} withPointer>
        <LineHeading lineColor='blue'>
            <span> PLUS, You’ll Get These 2 Fantastic Bonuses <br/> When You Join SketchWow Animate Today!</span>
        </LineHeading>
        <div className={styles.bonuses}>
            <BonusRow heading={'Animated Cartoon Character Maker'}
                      price={
                          <>
                              <StaticImage
                                  src="../../images/bonus-1-price.png"
                                  loading="lazy"
                                  width={248}
                                  quality={98}
                                  alt=""
                              />
                              <span>$39 VALUE</span>
                          </>
                      }
                      text={<>
                          <p>Need to explain something in a casual way that commands instant attention? Create your
                              own cool
                              animated comic strips using these bonus characters. Pick from a wide variety of body
                              poses,
                              hairstyles, gender and more.</p>
                          <p>In a couple mouse clicks…, you can add facial animation and drop in your own audio
                              (narration)
                              tracks too. This takes SketchWow Animate to another level adding these nifty animated
                              cartoons
                              to any of your animated sketches you create using SketchWow Animate</p>
                      </>}
                      image={<StaticImage
                          src="../../images/bonus-1.png"
                          loading="lazy"
                          width={468}
                          quality={90}
                          alt=""
                      />}
            />
        </div>
    </WaveHeaderSection>);