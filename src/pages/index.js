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
import {BonusesSection} from "../components/BonusesSection/BonusesSection";
import {TestDriveSection} from "../components/TestDriveSection/TestDriveSection";
import {NoFeeSection} from "../components/NoFeeSection/NoFeeSection";


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
        <BonusesSection/>
        <TestDriveSection/>
        <NoFeeSection/>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
    <>
        <Seo title="Home"/>
            <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
            </style>
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" as="style"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"/>*/}
        {/*<link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');"*/}
        {/*      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"/>*/}
        {/*<noscript>*/}
        {/*    <link rel="stylesheet"*/}
        {/*          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"/>*/}
        {/*</noscript>*/}
    </>
)

export default IndexPage
