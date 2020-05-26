const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    let SaleTokens_address = SaleTokens.address;
    console.log('Using account', ownerAddress, "SaleTokens", SaleTokens_address);

    DappCraftRecipes.deployed()
    .then((res) => {
        console.log('setupOperator: ', ownerAddress, ' for SaleTokens ', SaleTokens_address);
        return res.setApprovalForAll.sendTransaction(SaleTokens_address, true, {from: ownerAddress});
    })
    .then((res) => {
        console.log('result: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
