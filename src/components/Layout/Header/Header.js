import * as React from "react"
import {Link} from "gatsby"
import {Container} from "../Container/Container";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Header.module.css';
import {OrderStep} from "../../OrderStep/OrderStep";
import {HeaderBG} from "./HeaderBG";

const Header = ({siteTitle}) => (
    <>
        <HeaderBG/>
        <Container>
            <header className={styles.header}>
                <Link to="/" className={styles.logoLink}>
                    <StaticImage
                        src="../../../images/logo.png"
                        loading="eager"
                        width={277}
                        quality={100}
                        alt="SketchWOW"
                    />
                </Link>
                <OrderStep/>
            </header>
        </Container>
    </>
)

export default Header
