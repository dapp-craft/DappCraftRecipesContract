const dotenv = require('dotenv');
dotenv.config();

const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function() {
  let ownerAddress = process.env.FROM_ADDRESS;
    let SaleTokens_address = SaleTokens.address;
  console.log('Using account', ownerAddress, "SaleTokens", SaleTokens_address);

    DappCraftRecipes.deployed()
    .then((res) => {
        return res.setApprovalForAll.sendTransaction(SaleTokens_address, true, {from: ownerAddress});
    })
    .then((res) => {
        console.log('setApprovalForAll: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
