// @TODO replace values by env settings using gulp
module.exports = {
  proxy: 'https://proxy.jolocom.com',
  endpoint: 'https://proxy.jolocom.net/proxy?url=https://webid.jolocom.de',
  accountStatusEndpoint:
    'https://proxy.jolocom.net/proxy?' +
    'url=https:webid.jolocom.de,system/accountStatus',
  verificationProvider: 'https://verification.jolocom.com',
  gateway:
    typeof IDENTITY_GATEWAY_URL !== 'undefined' && IDENTITY_GATEWAY_URL
    ? IDENTITY_GATEWAY_URL
    : 'https://staging.identity.jolocom.com',
  blockchain: {
    // Jolocom Rinkeby
    gethHost: 'https://verification.jolocom.com/geth/',
    lookupContractAddress: '0x281b41068de3901174dcae26815e3dbadffd9581',
    jolocomEtherAddress: 'https://verification.jolocom.com/ether',
    seedStorage: {
      url: 'https://seed-service.jolocom.net/'
    }

    // infura geth node
    // gethHost: 'https://rinkeby.infura.io',
    // lookupContractAddress: '0x1f18b8d96f0a26eea82ce0d4bc202cc429df955f',

    // local geth node
    // gethHost: 'http://localhost:8545',
    // lookupContractAddress: '0x1f18b8d96f0a26eea82ce0d4bc202cc429df955f',

    // Ropsten Testnet on 2017-04-12
    // gethHost: 'http://verification.jolocom.com:8545',
    // lookupContractAddress: '0x58ab8f7c72b4bec073db317d92aa0a15f09d9a6b',
  },
  stripe: {
    publishableKey: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'
  },
  dev: true
}
