/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react");
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({setHtmlAttributes, setPostBodyComponents}) => {
    setHtmlAttributes({lang: `en`}),
        setPostBodyComponents([
            <link rel="preconnect" href="https://fonts.googleapis.com"/>,
            <link rel="preconnect" href="https://fonts.gstatic.com"/>,
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
                  rel="stylesheet"/>,
            // <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');"
            //       href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"/>,
            // <noscript>
            //     <link rel="stylesheet"
            //           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"/>
            // </noscript>

        ])
}
