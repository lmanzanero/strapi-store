require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Strapi Gatsby Blog Shopping Cart",
    titleTemplate: "%s · Unleash content",
    description:
      "Strapi Gatsby Blog",
    url: "https://strapi-gatsby-store-pdyzpqzs3.vercel.app", // No trailing slash allowed!
    image: "/uploads/default-image.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@you",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:  "https://lmanzanero.herokuapp.com",
        contentTypes: [
          "article",
          "category",
          "user"
        ],
        singleTypes: [`Homepage`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}
