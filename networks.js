const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    ropsten: {
            provider: () => new HDWalletProvider(
              mnemonic, 'https://ropsten.infura.io/v3/65ea3ed956c44aca8c46cb48a782712b'
            ),
            networkId: 3,
            gasPrice: 10e9
          }
  },
};
