const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    //    let DappCraftRecipes_address = "0x232d1d00e84ffd16ae4AB0e7E941FfCf67B10b89";
    let DappCraftRecipes_address = DappCraftRecipes.address;
    console.log('Using account', ownerAddress, "DappCraftRecipes", DappCraftRecipes_address);

    deployer.deploy(SaleTokens, ownerAddress, DappCraftRecipes_address,
        [96, 97, 98, 99, 100, 64, 65, 66, 67, 68, 32, 33, 34, 35, 36, 0, 1, 2, 3, 4],
        [3500, 3500, 3500, 3500, 3500, 700, 700, 700, 700, 700, 250, 250, 250, 250, 250, 75, 75, 75, 75, 75],
        0.0001887 * 1e18,
        {gas: 5000000, from: ownerAddress})
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    })
    .then((res) => { console.log('success: ', ownerAddress); });
};
