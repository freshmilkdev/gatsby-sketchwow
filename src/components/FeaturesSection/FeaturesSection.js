import React from 'react';
import * as styles from './FeaturesSection.module.css'
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {Feature} from "./Feature";

export const FeaturesSection = () => (
    <WaveHeaderSection color={'teal'} withPointer>
        <LineHeading lineColor='blue'>
            <span>Creating  <br className='mobile-only'/> Ahh-mazing Animations <br/>Has Never <br className='mobile-only'/> Been Easier!</span>
        </LineHeading>
        <div className={styles.features}>
            <div className={styles.featuresCol}>
                <Feature title={<>Built For Speed, <br/> Not Complexity</>} color={'pink'}
                         text={<>
                             You won’t have to sort through complex <br/> menus or confusing options. <br/> Just click
                             an Effect and add it. Presto... <br/> done! Next.
                         </>}/>
                <Feature title={
                    <>Create Single or <br/> Multi-Frame <br/> Animations</>
                } color={'orange'}
                         text={
                             <>Make a one-page animation... or add<br/> page transitions to create amazing, fully<br/> automated
                                 multi-frame videos. Sooo <br/>many possibilities here</>
                         }/>
            </div>
            <div className={styles.featuresCol}>
                <Feature title={<>
                    ZERO Animation<br/> Or Design Skills<br/> Required
                </>} color={'purple'}
                         text={
                             <>Don’t have a creative bone in your body? <br/>No problemo! Can you click a
                                 mouse?<br/> Then, you can easily make great-looking <br/>animations using SketchWow
                                 Animate!</>
                         }/>

                <Feature title={<>Add Audio<br/> Tracks Too</>} color={'blue'}
                         text={<>
                             That’s right. Drop in a dope background <br/> music track or narration. Then,
                             export <br/> your complete animated video with audio
                         </>}/>
            </div>
            <div className={styles.featuresCol}>
                <Feature title={<>MP4<br/> Compression &<br/> Optimization</>} color={'teal'}
                         text={
                             <>Using your video on the web? The <br/> built-in compressor tool will reduce
                                 the <br/> size of your video files without <br/>sacrificing quality. Veddy, veddy
                                 handy!</>
                         }/>

                <Feature title={<>10-Seconds or <br/> 10-Minutes?</>} color={'yellow'}
                         text={
                             <>SketchWow Animate gives you flexibility. <br/> Crank out a quick 10-second animated <br/>video.
                                 Or explain anything using a full<br/> length video of 2…5…10 minutes or more</>
                         }/>
            </div>
        </div>
    </WaveHeaderSection>
);
