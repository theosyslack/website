module.exports = {
  siteMetadata: {
    title: `TheoSyslack`,
    description: `One person's development journey.`,
    author: `@theosyslack`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `theosyslack-website`,
        short_name: `theosyslack`,
        start_url: `/`,
        background_color: `#170517`,
        theme_color: `#170517`,
        display: `minimal-ui`,
        icon: `src/resources/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: ["gatsby-remark-prismjs"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
}
