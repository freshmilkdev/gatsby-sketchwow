import React from 'react';
import {WaveHeaderSection} from "../../WaveHeaderSection/WaveHeaderSection";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Footer.module.css';
import {Link} from "gatsby";

const navLinks = [
    {title: 'Privacy Policy', path: '/'},
    {title: 'Terms of Service', path: '/'},
    {title: 'Cookie Policy', path: '/'},
    {title: 'Open Source Licenses', path: '/'},
    {title: 'Order Now', path: '/'},
    {title: 'Support', path: '/'}
]
export const Footer = () => (
    <WaveHeaderSection color={'navy'}>
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <StaticImage
                    src="../../../images/logo-white.png"
                    loading="lazy"
                    width={313}
                    quality={100}
                    alt="SketchWOW"
                />
            </div>
            <nav className={styles.navigation}>
                <ul>
                    {navLinks.map(({path, title}, ix) =>
                        <li key={`footerNav${ix}`}><Link to={path}>{title}</Link></li>
                    )}
                </ul>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} SketchWow. All Rights Reserved.</p>
            </nav>
            <p className={styles.disclaimer}>
                This Website Is Not A Part Of The Facebook Website or Meta Platforms Inc. Additionally, This Site And
                Product Is Not Endorsed By (Nor Affiliated With) Facebook or Meta Platforms Inc. In Any Way. Facebook Is
                A Registered Trademark of Facebook Inc.
            </p>
        </footer>
    </WaveHeaderSection>
);