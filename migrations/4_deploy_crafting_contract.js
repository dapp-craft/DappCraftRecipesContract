const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const WearableCrafting = artifacts.require("WearableCrafting");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    let DappCraftRecipes_address = DappCraftRecipes.address; // rinkeby 0x6573d7F02c6435109b827a7e56cC764A85c2e5AA
    console.log('Using account', ownerAddress, "DappCraftRecipes", DappCraftRecipes_address);

    let wearableCollection = accounts[0];
    if (network === 'rinkeby') {
        wearableCollection = "0x41aeAfc05441a9ea4b2969b4fad04352020bAA08";
    } else {
        wearableCollection = "0x1e1d4E6262787c8A8783a37FeE698Bd42aA42bec";
    }

    deployer.deploy(WearableCrafting, DappCraftRecipes_address, wearableCollection,
        {from: ownerAddress})
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    })
    .then((res) => { console.log('success: ', ownerAddress); });
};
