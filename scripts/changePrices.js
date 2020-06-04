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
        return res.setPrices.sendTransaction(
        [3],
        [0],

        , {from: ownerAddress});
    })
    .then((res) => {
        console.log('setPrices: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
