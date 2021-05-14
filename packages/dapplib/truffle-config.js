require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain honey idea clog once sell'; 
let testAccounts = [
"0xf09f4d9aaf96d7b459660c4444a2a47b56cfac5b649f6dd2cb6ff342e17f0b1f",
"0xf35627b60fa8bbf8f4738bd55dfd9717ad1dd1dcbbd2bf56c10ad35c9a4e5309",
"0x291931cd39da6a2b2e7735408e2ac3f20ffe97a627ff87728558e315b5041173",
"0xfabdd752d01488cb23ea301ca5e955a01ccfdb41bad426c580d2185e9fb16c34",
"0xbc69cae3bfa0b51723b231126ded0fb8888bc903afee62815e9aa16d4aca4db9",
"0x20e37dffe5f53e61409b7e7471c7d8d68e67ad1da94867b9fcadbe9ae68f8ad7",
"0xd8f346522fcd1f5ece7462780e9ea3bac967e86fed2153e87a4c2bc8a16c4b10",
"0x3120414f49ff59c3a68df8afa5e4f64f38d9319c8bfedc9a21b62c10c8911e5a",
"0x698db7fa6bb3eccc12898826388970e933dc7ecf5d21d36789b77f97e136a7df",
"0x40437273c291e4757089ce208afa581fc376fd0fd433788d481118c3ef8c69b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
