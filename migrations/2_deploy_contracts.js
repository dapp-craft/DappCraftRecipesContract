const DappCraftRecipes = artifacts.require("DappCraftRecipes");

module.exports = function(deployer, network, accounts) {
    let ownerAddress = accounts[0];
    // OpenSea proxy registry addresses for rinkeby and mainnet.
    let proxyRegistryAddress;
    if (network === 'rinkeby') {
        proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
    } else {
        proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
    }
    console.log('Using account', ownerAddress);

    deployer.deploy(DappCraftRecipes, proxyRegistryAddress,
    [96, 97, 98, 99, 100, 64, 65, 66, 67, 68, 69,  32,  33,  34,  35,  36,   0,   1,   2,   3,   4],
    [ 6,  6,  6,  6,   6, 20, 20, 20, 20, 20, 20, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
    {from: ownerAddress})
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
