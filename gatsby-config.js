/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Paul Partridge",
    author: "Paul Partridge",
    keywords: "web developer, software engineer, web designer, full-stack developer"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`
  ],
}
