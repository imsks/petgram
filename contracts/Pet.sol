// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Pet is ERC721, ERC721Enumerable, ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter _tokenIds;

  constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

  mapping(string => uint256) public tokenURIToTokenId;

  event PetNFTCreated (
    uint256 tokenId,
    string imageURL,
    address sender
  );

  function mintPetNFT(string memory _tokenURI) external {
    require(bytes(_tokenURI).length > 0, 'Empty Token URI');
     _tokenIds.increment();

    uint256 _tokenId = _tokenIds.current();
    _safeMint(msg.sender, _tokenId);
    _setTokenURI(_tokenId, _tokenURI);
    emit PetNFTCreated(_tokenId, _tokenURI, msg.sender);
  }

  function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
