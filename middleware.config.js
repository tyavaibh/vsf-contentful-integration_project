// module.exports = {
//   integrations: {
//     shopify: {
//       location: '@vue-storefront/shopify-api/server',
//       configuration: {
//         api: {
//           domain: process.env.SHOPIFY_DOMAIN,
//           storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN
//         },
//         currency: 'USD',
//         country: 'US'
//       }
//     }
//   }
// };

module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'digitup1.myshopify.com',
          storefrontAccessToken: 'a085b88549cdd832eb1de618ff86bb29'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};