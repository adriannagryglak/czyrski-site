/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Piotr Czyrski dr n. med. lekarz stomatolog",
    description: "Gabinet stomatologiczny, prowadzony od 1986 roku oferujący kompleksowe, wielodyscyplinarne podejście do leczenia stomatologicznego.", 
    //change to production url
    siteUrl: 'https://www.beta.czyrski.pl',
    keywords: 'dentysta,stomatolog,Wołów,gabinet,stomatologiczny,stomatologia,czyrski,leczenie,ortodoncja,protetyka',
    image: 'static/logo.png'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        //helped with error in building
        //ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Piotr Czyrski gabinet stomatologiczny',
        short_name: 'Czyrski',
        start_url: '/',
        background_color: '#f5f8fa',
        theme_color: '#396CF0',
        display: 'minimal-ui',
        icon: 'static/logo.png',
      },
    },
  ],
};
