# PayPool Project

This project is a simple PayPool smart contract with deposit tracking and status management.

## Getting Started

### Prerequisites

- Node.js
- Hardhat
- Metamask
- Scroll Sepolia testnet tokens

### Installing

1. Clone the repository:

```sh
git clone https://github.com/yourusername/PayPoolProject.git
cd PayPoolProject
```

2. Install the dependencies:

```sh
npm install
```

### Deploying the Contract

1. Configure your Scroll Sepolia testnet in `hardhat.config.js`:

```js

module.exports = {
  solidity: "0.8.25",
  networks: {
    scrollSepolia: {
      url: process.env.SCROLL_SEPOLIA_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

```

2. Deploy the contract:

```sh
npx hardhat run scripts/deploy.js --network scrollSepolia
```

### Running Tests

To run the tests:

```sh
npx hardhat test
```
