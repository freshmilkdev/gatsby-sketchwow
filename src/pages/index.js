import * as React from "react"
import Layout from "../components/Layout/layout"

import '../styles/global.css';
import {Hero} from "../components/Hero/Hero";


const IndexPage = () => (
    <Layout>
        <Hero/>
        {/*<Steps/>*/}
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home"/>

export default IndexPage
