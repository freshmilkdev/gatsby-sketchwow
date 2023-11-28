import React from 'react';
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";
import {StaticImage} from "gatsby-plugin-image";


export const AnimateAnythingSection = () => (
    <WaveHeaderSection color={'green'}
                       headerImage={<StaticImage
                           src={"../../images/green-bg-wave-top.png"}
                           loading="lazy"
                           width={1700}
                           quality={95}
                           alt=""
                       />}>
        meow
    </WaveHeaderSection>
);