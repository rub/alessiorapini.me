module.exports = {
  siteMetadata: {
    title: `Alessio Rapini | UX Designer`,
    description: `UX Designer (who loves to code too)`,
    author: `Alessio Rapini`,
    url: "http://alessiorapini.me",
    image: "./src/images/favicon.png",
    twitterUsername: "@alessiorapini",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "http://localhost:1337",
    //     contentTypes: [
    //       // List of the Content Types you want to be able to request from Gatsby.
    //       "work",
    //       "about",
    //       "user",
    //     ],
    //     queryLimit: 1000,
    //   },
    // },
  ],
}
