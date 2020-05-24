pragma solidity ^0.5.11;

import "./ERC1155Tradable.sol";

/**
 * @title DappCraftRecipes
 * DappCraftRecipes - a contract for my semi-fungible tokens.
 */
contract DappCraftRecipes is ERC1155Tradable {

  // Must be sorted by rarity
  enum Rarity {
//    Uncommon,
    Swanky,
    Legendary,
    Epic,
    Mythic
  }
  uint256 constant NUM_RARITIES = 4;

//  enum Collection {
//      FomoEngineer,
//      ChainWelder,
//      MoonMiner,
//      NiftyBlocksmith
//  }

  enum WearableType {
    Helmet,
    Goggles,
    Jacket,
    Trousers,
    Boots
  }
  uint256 constant NUM_WEARABLE_TYPES = 5;


  constructor(address _proxyRegistryAddress) ERC1155Tradable(
    "DappCraftRecipes",
    _proxyRegistryAddress
  ) public {
    _setBaseMetadataURI("https://dcl-dapp-craft.storage.googleapis.com/collection1/metadata/");

    uint16[NUM_RARITIES] memory MaximumMintage = [5000, 1000, 100, 10];
    uint256[] memory ids = new uint256[](NUM_RARITIES*NUM_WEARABLE_TYPES);
    uint256[] memory quantities = new uint256[](NUM_RARITIES*NUM_WEARABLE_TYPES);
    for (uint256 i = 0; i < NUM_RARITIES; i++) {
      Rarity rarity = Rarity(i);
      for (uint256 j = 0; j < NUM_WEARABLE_TYPES; j++) {
        WearableType wearable_type = WearableType(j);
        uint256 id = (uint16(rarity) * 2 ** 5) + uint16(wearable_type);
        ids[i*NUM_WEARABLE_TYPES + j] = id;
        quantities[i*NUM_WEARABLE_TYPES + j] = MaximumMintage[uint16(rarity)];
      }
    }
    batchMint(msg.sender, ids, quantities, new bytes(0));
  }
}
