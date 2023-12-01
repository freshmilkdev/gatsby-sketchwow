import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import '../styles/global.css';
import {Hero} from "../components/Hero/Hero";
import {Steps} from "../components/Steps/Steps";
import {SayHelloSection} from "../components/SayHelloSection/SayHelloSection";
import {AnimateAnythingSection} from "../components/AnimateAnythingSection/AnimateAnythingSection";
import {WatchDesignsSection} from "../components/WatchDesignsSection/WatchDesignsSection";
import {BestOfAllSection} from "../components/BestOfAllSection/BestOfAllSection";
import {AnimateThingsGrid} from "../components/AnimateThingsGrid/AnimateThingsGrid";
import {FeaturesSection} from "../components/FeaturesSection/FeaturesSection";
import {SoEasySection} from "../components/SoEasySection/SoEasySection";
import {TenReasonsSection} from "../components/TenReasonsSection/TenReasonsSection";


const IndexPage = () => (
    <Layout>
        <Hero/>
        <Steps/>
        <SayHelloSection/>
        <AnimateAnythingSection/>
        <WatchDesignsSection/>
        <BestOfAllSection/>
        <AnimateThingsGrid/>
        <FeaturesSection/>
        <SoEasySection/>
        <TenReasonsSection/>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
