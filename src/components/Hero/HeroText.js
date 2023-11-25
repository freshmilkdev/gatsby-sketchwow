import React from 'react';
import * as styles from './Hero.module.css';

export const HeroText = () => (
    <div className={styles.heroText}>
        <p style={{fontWeight: 700, fontSize: '1.375rem'}}>I know you are excited to jump-in and use SketchWow.</p>
        <p>Before you do that… please give this a quick read…</p>
        <p>“Can I add, edit & animate my SketchWow designs directly in PowerPoint or my video animation software?”</p>
        <p>A couple challenges here…</p>
        <p>Challenge #1: SketchWow is not designed to make full-animation or whiteboard videos</p>
        <p>Challenge #2: It’s impossible for us to integrate with every presentation and video animation <br/> app on
            the market</p>
        <p style={{textDecoration: "underline"}}>However... we recently REMOVED these problems with a much easier
            solution.</p>
        <p> Keep reading for details…</p>
        <p> Currently, it takes 4 steps to make animations from your SketchWow designs...</p>
    </div>
);