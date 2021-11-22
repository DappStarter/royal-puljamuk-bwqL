require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike deny random equip hope prize slot gesture'; 
let testAccounts = [
"0x88a3f946f963b00c608e47ab97976589b2346d4628050f6a1a86509213553bd6",
"0x06620e2017c06203cf4f6a18bf97047f42a33071af9b99ad32cab3c133b7e1c9",
"0xf88aff097dba4896058fcbe8b4718c0431683ba3da94176c47c51a3f44cc8303",
"0x5ad75b120f0c57097a06350add654747d5d12db96842418e5fe4545ea56a3e37",
"0xaaa3faaff74c59aeed0a686eb85b8ed5fe36ad7ab3615de2ea042e4f0b014826",
"0x3730ea3c76a8bd43182e7b788a05ca5b248494189a5e97f41c292ed6e01d6769",
"0xfedaed0232ccbaf8b3f6e52c41d146d0eb0b6c911c4cb931b00daa337b104406",
"0x83e66436ecc3fb3f131f4e99b1e8757285802af238be1e699c665385393d5699",
"0x338344e9ecfec2a15ccc4390aef87bb86721343f807a72052369a01bba60d851",
"0x89ad73ad93cdbe8c48dd6581aaca20f32d8dd9ba99af3d2ba00856595c96c46f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

