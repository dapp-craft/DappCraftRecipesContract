pragma solidity ^0.5.11;

import "./ERC1155Tradable.sol";

/**
 * @title DappCraftRecipes
 * DappCraftRecipes - a contract for my semi-fungible tokens.
 */
contract DappCraftRecipes is ERC1155Tradable {

    constructor(address _proxyRegistryAddress,
        uint256[] memory _ids,
        uint256[] memory _quantities) ERC1155Tradable(
        "Dapp-Craft Vouchers",
        _proxyRegistryAddress
    ) public {
        _setBaseMetadataURI("https://dcl-dapp-craft.storage.googleapis.com/collection1/metadata/");

        batchMint(msg.sender,
            _ids,
            _quantities,
            new bytes(0));
    }
}
