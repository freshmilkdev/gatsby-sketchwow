import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {BonusRow} from "./BonusRow";

import * as styles from './BonusesSection.module.css';
import BonusOne from "../../assets/svg/bonus-1.inline.svg";
import BonusTwo from "../../assets/svg/bonus-2.inline.svg";
import BonusOnePrice from "../../assets/svg/bonus-1-price.inline.svg";
import BonusTwoPrice from "../../assets/svg/bonus-2-price.inline.svg";
export const BonusesSection = () => (
    <WaveHeaderSection color={'sand'} withPointer>
        <LineHeading lineColor='blue'>
            <span> PLUS, You’ll Get These 2 Fantastic Bonuses <br/> When You Join SketchWow Animate Today!</span>
        </LineHeading>
        <div className={styles.bonuses}>
            <BonusRow heading={'Animated Cartoon Character Maker'}
                      price={
                          <>
                              <BonusOnePrice className={styles.priceImage}/>
                              <span className={styles.priceValue}>$39 VALUE</span>
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
                      image={<BonusOne/>}
            />
            <BonusRow heading={'AI Animations & Presentations'}
                      price={
                          <>
                              <BonusTwoPrice className={styles.priceImage}/>
                              <div>
                                  <p className={'font-30 font-bold'}>**Coming Soon**</p>
                                  <p className={styles.priceValue}>$144/year value</p>
                              </div>
                          </>
                      }
                      text={<>
                          <p>
                              You already know that Artificial Intelligence (AI) is a hot topic right now. If you do
                              your
                              homework… you’ll find AI presentation and <strong>AI animation software that costs
                              $144-$300+
                              PER YEAR.</strong> Yikes! Who has that kind of spare change lying around, right?
                          </p>
                          <p>We are currently working to add AI to SketchWow Animate. When we do… two things are
                              guaranteed to happen:</p>
                          <ul style={{listStyleType: 'decimal', paddingLeft: 60}}>
                              <li>You won’t pay a nickel to get this new TURBOCHARGED version</li>
                              <li>You will be amazed! (... and save hours of time too)</li>
                          </ul>
                          <p>Ok. Let’s wrap this up. It’s time to…</p>
                      </>}
                      image={<BonusTwo/>}
            />
        </div>
    </WaveHeaderSection>);