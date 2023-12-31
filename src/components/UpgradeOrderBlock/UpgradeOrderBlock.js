import React from 'react';
import {UpgradeOrderButton} from "./UpgradeOrderButton/UpgradeOrderButton";
import {DashedText} from "./DashedText/DashedText";
import {SectionText} from "../SectionText/SectionText";


export const UpgradeOrderBlock = () => (
    <>
        <UpgradeOrderButton link={'/'} afterText={'I want to add SketchWow Animate for a one-time fee of just $79'}/>
        <DashedText>
            No thanks. I’ll pass on this SketchWow Animate add-on which includes loads of features to
            animate +
            add motion to anything I create in SketchWow and produce unique sketch animation videos,
            automated
            multi-page videos and more.
        </DashedText>
        <SectionText>
            Best part... your animated videos won’t look like typical, animated PowerPoints that you — <br/>
            and your audience – have seen a million times.
        </SectionText>
    </>
);
