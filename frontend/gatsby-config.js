module.exports = {
  siteMetadata: {
    title: `Alessio Rapini | UX Designer`,
    description: `UX Designer (who loves to code too).`,
    author: `Alessio Rapini`,
    siteUrl: 'https://alessiorapini.me',
    image: '/rub.png',
    twitterUsername: '@alessiorapini',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-1CHPH6M0PJ', // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
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
  ],
};
