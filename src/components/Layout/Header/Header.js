import * as React from "react"
import {Link} from "gatsby"
import {Container} from "../Container/Container";
import * as styles from './Header.module.css';
import {OrderStep} from "../../OrderStep/OrderStep";
import {HeaderBG} from "./HeaderBG";
import LogoSVG from "../../../assets/svg/logo.inline.svg";

const Header = ({siteTitle}) => (
    <>
        <HeaderBG/>
        <Container>
            <header className={styles.header}>
                <Link to="/" className={styles.logoLink}>
                    <LogoSVG/>
                </Link>
                <OrderStep/>
            </header>
        </Container>
    </>
)

export default Header
