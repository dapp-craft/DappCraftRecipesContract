const dotenv = require('dotenv');
dotenv.config();

const WearableCrafting = artifacts.require("WearableCrafting");

module.exports = function() {
  let ownerAddress = process.env.FROM_ADDRESS;
  console.log('Using account', ownerAddress, "WearableCrafting", WearableCrafting.address);

    WearableCrafting.deployed()
    .then((res) => {
        return res.setWearableCollection.sendTransaction(
        "0x3591D4d3b950CD049d814C7356B540E7d95d9734", {from: ownerAddress});
    })
    .then((res) => {
        console.log('setWearableCollection: ', res);
        return;
    })
    .catch(function(err) {
        console.log("ERROR! ", err.message);
    });
};
