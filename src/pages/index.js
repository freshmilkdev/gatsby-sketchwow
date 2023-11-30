import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import '../styles/global.css';
import {Hero} from "../components/Hero/Hero";
import {Steps} from "../components/Steps/Steps";
import {SayHelloSection} from "../components/SayHelloSection/SayHelloSection";
import {AnimateAnythingSection} from "../components/AnimateAnythingSection/AnimateAnythingSection";
import {WatchDesignsSection} from "../components/WatchDesignsSection/WatchDesignsSection";
import {BestOfAllSection} from "../components/BestOfAllSection/BestOfAllSection";


const IndexPage = () => (
    <Layout>
        <Hero/>
        <Steps/>
        <SayHelloSection/>
        <AnimateAnythingSection/>
        <WatchDesignsSection/>
        <BestOfAllSection/>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
