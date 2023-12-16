import React from 'react';
import * as styles from './DashedText.module.css';

import PointerLeftSVG from "../../../assets/svg/pointer-left.inline.svg";
import PointerRightSVG from "../../../assets/svg/pointer-right.inline.svg";
export const DashedText = ({children}) => (
    <div className={styles.wrapper}>
        <div className={`${styles.inner} font-18`}>
            <PointerLeftSVG
                style={{position: "absolute"}}
                className={styles.leftImage}
            />
            <p>{children}</p>
            <PointerRightSVG
                style={{position: "absolute"}}
                className={styles.rightImage}
            />
        </div>
    </div>
);

