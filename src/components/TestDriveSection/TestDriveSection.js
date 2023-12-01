import React from 'react';
import {LineHeading} from "../LineHeading/LineHeading";
import {WaveHeaderSection} from "../WaveHeaderSection/WaveHeaderSection";

export const TestDriveSection = () => (
    <WaveHeaderSection color={'pink'} withPointer>
        <LineHeading lineColor='red'>
            <span>Start Creating Not-So-Perfect <br/>Animations That Stand Out!</span>
        </LineHeading>
    </WaveHeaderSection>
);
