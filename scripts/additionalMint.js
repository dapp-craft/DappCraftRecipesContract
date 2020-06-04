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
        return res.batchMint.sendTransaction([64, 65, 66, 67, 68, 69], [40, 40, 40, 40, 40, 40], {from: ownerAddress});
    })
    .then((res) => {
        console.log('batchMint: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
