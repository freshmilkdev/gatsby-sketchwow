import React from 'react';

import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Header.module.css';

export const HeaderBG = () => (
   <div>
       <StaticImage
           className={styles.headerBG}
           src="../../../images/hero-bg.png"
           loading="lazy"
           width={1700}
           quality={95}
           alt=""
       />
   </div>
);