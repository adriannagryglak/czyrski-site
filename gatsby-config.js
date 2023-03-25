/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Piotr Czyrski dr n. med. lekarz stomatolog",
    description: "Gabinet stomatologiczny, prowadzony od 1986 roku oferujący kompleksowe, wielodyscyplinarne podejście do leczenia stomatologicznego.", 
    siteUrl: 'https://www.czyrski.pl',
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
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "VINYL", // nazwa
        fieldName: "vinyl", // nazwa z malych liter (nie pamietam po co to bylo ale korzysta się z tego pozniej
        url: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfi9qxfn0vd001un6f1zh0n6/master", // to api które bedzie trzeba przekopiowac z hygraph
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
