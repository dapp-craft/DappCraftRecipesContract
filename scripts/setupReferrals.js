const dotenv = require('dotenv');
dotenv.config();

const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function() {
  let ownerAddress = process.env.FROM_ADDRESS;
    let SaleTokens_address = SaleTokens.address;
  console.log('Using account', ownerAddress, "SaleTokens", SaleTokens_address);

    SaleTokens.deployed()
    .then((res) => {
        return res.addReferrals.sendTransaction(
        [
        '0x2e14f91e8e758657549aac91d1f2c7497aceb4ae',
        '0x5a6e40b29bf20e4f60e7becb571af5ad5796a3c4',
        '0x628f0bb4d70618897348208470b39cdbd6cb8f3c',
        '0x74ec638d8e82ab4e7aacac77ef47a49e735ca7dd',
        '0x7cf1ddc075f227e195c73428f21235bfc06e5e99',
        '0x89229af0a0a800241c1a33f70809c156a58d19dd',
        '0x8d1bf34397d31903320ac0a8fee81b3bb7531537',
        '0x958a524581068a6712f0f48c124688fa08275847',
        '0x9ecf41a5e98da5b4eac5e7f0824f79b8050659a6',
        '0xb9862b62b16744fc4faa3b7862dabada33293425',
        '0xc8a974a97f6a7f57b6ce09aed5905d5547039f11',
        '0xdcae1cd1ce33dd96416cada0e4a583dbdb8cc9ae',
        '0xe010b3bcbb3d077a82985194800227914393360a'
        ], {from: ownerAddress});
    })
    .then((res) => {
        console.log('addReferrals: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
