// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  // hygraphEndpoint: 'https://eu-central-1.cdn.hygraph.com/content/ckhx7xadya6xs01yxdujt8i80/master',
  hygraphEndpoint:
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cln8jcsy4h9gm01ukcs9572se/master',
  magentoEndpoint: 'https://c7d802a7cb.nxcli.io/grapql',
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  storefront: [{ locale: 'en', magentoStoreCode: 'en_US' }],
}
module.exports = config
