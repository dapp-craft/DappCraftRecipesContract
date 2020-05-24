const DappCraftRecipes = artifacts.require("DappCraftRecipes");
const SaleTokens = artifacts.require("SaleTokens");

module.exports = function() {
  let ownerAddress = "0x595DcB2f9188029ADcD7de3F20d91C6A6936B6d2";
    let SaleTokens_address = SaleTokens.address;
  console.log('Using account', ownerAddress, "SaleTokens", SaleTokens_address);

    DappCraftRecipes.deployed()
    .then((res) => {
        return res.uri.call(0);
    })
    .then((res) => {
        console.log('uri: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });

    SaleTokens.deployed()
    .then((res) => {
        return res.getPrices.call([0, 1, 2]);
    })
    .then((res) => {
        console.log('getPrices: ', res);
        console.log('0: ', web3.utils.fromWei(res[0], "ether" ));
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });

    DappCraftRecipes.deployed()
    .then((res) => {
//        console.log('setupOperator: ', ownerAddress, ' for SaleTokens ', SaleTokens_address, DappCraftRecipes.address);
        return res.balanceOf.call(ownerAddress, 0);
    })
    .then((res) => {
        console.log('balanceOf: ', res.toNumber());
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });

    DappCraftRecipes.deployed()
    .then((res) => {
        console.log('setupOperator: ', ownerAddress, ' for SaleTokens ', SaleTokens_address, DappCraftRecipes.address);
//        SaleTokens_address = "0xB7B5eFD8126c4ecF40a0e4189e893bd1424b4979";
        return res.isApprovedForAll.call(ownerAddress, SaleTokens_address);
    })
    .then((res) => {
        console.log('isApprovedForAll: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });

    SaleTokens.deployed()
    .then((res) => {
        let price = 0.0001887 * 1e18 * 75;
        console.log(price, 'setupOperator: ', ownerAddress, ' for SaleTokens ', SaleTokens_address, DappCraftRecipes.address);
        return res.buyNFTForETH.sendTransaction(0, 1, [], {gas: 5000000, from: ownerAddress, value: price});
    })
    .then((res) => {
        console.log('buyNFTForETH: ', res.tx);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
