/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

//another way to load the same fonts, currently handled with gatsby-srr

// window.addEventListener("load", function(){
//     const preConnectAPI = document.createElement('link');
//     preConnectAPI.setAttribute('rel', 'preconnect');
//     preConnectAPI.setAttribute('href', 'https://fonts.googleapis.com');
//
//     const preConnectCDN = document.createElement('link');
//     preConnectCDN.setAttribute('rel', 'preconnect');
//     preConnectCDN.setAttribute('href', 'https://fonts.gstatic.com');
//     preConnectCDN.setAttribute('crossorigin', '');
//
//     const font = document.createElement('link');
//     font.setAttribute('rel', 'stylesheet');
//     font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
//     document.head.appendChild(font);
// });

// Possible way to load fonts, but this will increase bundle size
// import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";
// import "@fontsource/inter/800.css";
// import "@fontsource/inter/900.css";