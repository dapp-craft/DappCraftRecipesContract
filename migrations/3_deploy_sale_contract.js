const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    let DappCraftRecipes_address = DappCraftRecipes.address;
    console.log('Using account', ownerAddress, "DappCraftRecipes", DappCraftRecipes_address);

    let walletStoredFundsAddress = accounts[0];
    if (network === 'rinkeby') {
        walletStoredFundsAddress = "0xF0D193D8524eC55fe2F5159aaD2BA1A264993605";
    } else {
        // use multisig wallet
        walletStoredFundsAddress = "0xf49056577a9266cd6CFd1B8f6ac151D9BB3671d7";
    }
    const rateMANAETH = 0.0001717;

    deployer.deploy(SaleTokens, walletStoredFundsAddress, accounts[0], DappCraftRecipes_address,
        [64, 65, 66, 67, 68, 69, 3],
        [1000,1000,1000,1000,1000,1500, 100],
        rateMANAETH * 1e18,
        {from: ownerAddress})
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    })
    .then((res) => { console.log('success: ', ownerAddress); });
};
