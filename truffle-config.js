const HDWalletProvider = require('truffle-hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const FROM_ADDRESS = process.env.FROM_ADDRESS;
const GAS_PRICE = parseFloat(process.env.GAS_PRICE) * 1e9;
const GAS = 5000000;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      gas: GAS,
      network_id: '*' // Match any network id
    },

    rinkeby: {
      network_id: 4,
      provider: function() { return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/" + INFURA_KEY); },
      gas: GAS,
      gasPrice: GAS_PRICE
    },

    live: {
      network_id: 1,
      provider: function() { return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/" + INFURA_KEY); },
      gas: GAS,
      gasPrice: GAS_PRICE
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 2
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.12"
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
