require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Becca Bailey`,
    author: `Becca Bailey`,
    description: `Becca likes to build things`,
    siteUrl: `http://becca.is`,
    social: {
      twitter: `beccaliz`,
    },
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Conferences`,
            tableLinks: [`Talks`, `Recordings`, `Resources`],
          },
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Talks`,
            tableLinks: [`Conferences`, `Recording`, `Resources`],
          },
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Recordings`,
            tableLinks: [`Conference`, `Talk`],
          },
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Resources`,
            tableLinks: [`Conferences`, `Talk`],
          },
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Podcasts`,
          },
          {
            baseId: `appOiICx5CYLlQTmi`,
            tableName: `Writing`,
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `@weknow/gatsby-remark-twitter`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56926359-3",
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
