import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import '../styles/global.css';

const IndexPage = () => (
  <Layout>
    Page goes here
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
