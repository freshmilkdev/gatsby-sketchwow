/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react");
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

//custom font loader to decrease bundle size
exports.onRenderBody = ({setHtmlAttributes, setPostBodyComponents}) => {
    setHtmlAttributes({lang: `en`}),
    setPostBodyComponents([
        <link rel="preconnect" href="https://fonts.googleapis.com"/>,
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>,
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"/>,
    ])
}
