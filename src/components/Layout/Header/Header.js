import * as React from "react"
import {Link} from "gatsby"
import {Container} from "../Container/Container";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Header.module.css';

const Header = ({siteTitle}) => (
    <header className={styles.header}>
        <Container>
            <Link to="/" style={{position: 'relative'}}>
                <StaticImage
                    src="../../../images/logo.png"
                    loading="eager"
                    width={277}
                    quality={67}
                    alt=""
                />
            </Link>
        </Container>
    </header>
)

export default Header
