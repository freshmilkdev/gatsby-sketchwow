import * as React from "react"
import {Link} from "gatsby"
import {Container} from "../Container/Container";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Header.module.css';
import {OrderStep} from "../../OrderStep/OrderStep";

const Header = ({siteTitle}) => (
    <Container>
        <header className={styles.header}>
            <Link to="/" style={{position: 'relative'}}>
                <StaticImage
                    src="../../../images/logo.png"
                    loading="eager"
                    width={277}
                    quality={67}
                    alt=""
                />
            </Link>
            <OrderStep/>
        </header>
    </Container>
)

export default Header
