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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-smoothscroll`,
  ],
}
