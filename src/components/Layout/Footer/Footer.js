import React from 'react';
import {WaveHeaderSection} from "../../WaveHeaderSection/WaveHeaderSection";

import * as styles from './Footer.module.css';
import {Link} from "gatsby";
import LogoSVG from "../../../assets/svg/logo-footer.inline.svg";
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
                <Link to={'/'}>
                    <LogoSVG className={styles.image}/>
                </Link>
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