module.exports = {
  siteMetadata: {
    title: `Alessio Rapini | UX Designer`,
    description: `UX Designer (who loves to code too)`,
    author: `Alessio Rapini`,
    siteUrl: "https://alessiorapini.me",
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alessio Rapini`,
        short_name: `Alessio Rapini`,
        start_url: `/`,
        background_color: `#050505`,
        theme_color: `#050505`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
        crossOrigin: `use-credentials`,
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
