import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import * as styles from "./Steps.module.css";

export const StepRow = ({title, description}) => (
    <li>

        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </li>
);
