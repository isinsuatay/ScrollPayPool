require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.25",
  networks: {
    scrollSepolia: {
      url: process.env.SCROLL_SEPOLIA_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
