# Hardhat Cronoscan plugin

Hardhat plugin for integration with Cronoscan's contract verification service.

This plugin needs to be used in conjunction with the [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) plugin (v3.1.0 or above).

## Features

Verify the source code for your Solidity contracts on [Cronoscan](https://cronoscan.com/).

## Installation

### 1. Install the package

```
# Install hardhat-etherscan plugin
npm install --save-dev @nomiclabs/hardhat-etherscan@^3.1.0

# Install hardhat-cronoscan plugin
npm install --save-dev @cronos-labs/hardhat-cronoscan
```

### 2. Import the plugins

In your `hardhat.config.ts`, import the two plugins:
```
...
import "@nomiclabs/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "@cronos-labs/hardhat-cronoscan";
...
```

### 3. Define your Cronoscan API key

In your project's `hardhat.config.ts`, append to your existing configurations:
```
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
      cronosTestnet: "{YOUR_CRONOSCAN_TESTNET_API_KEY}",
    },
  },
};
```

Replace `{YOUR_CRONOSCAN_API_KEY}` with your Cronoscan API key. You can generate your API key by creating an Cronoscan account and generate it [here](https://cronoscan.com/myapikey).

Cronoscan Testnet uses the same API key as Cronoscan (Mainnet). However, it is recommended to generate a new one on the Cronoscan portal and replace `{YOUR_CRONOSCAN_TESTNET_API_KEY}` with it.

## Tasks

This plugin add the [Cronos](https://cronos.org) network to the `verify` task provided by [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan). With this plugin the `verify` task is able to verify Cronos contracts through [Cronoscan](https://cronoscan.org)'s service.

## Usage

In your existing hardhat project, run the following commands

### Mainnet 

```
npx hardhat verify --network cronos DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

### Testnet

```
npx hardhat verify --network cronosTestnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

For more advance usage, please refer to hardhat-etherscan's [documentation](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan/v/3.1.0#user-content-usage).

## Required plugins

- [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) v3.1.0 or above

## Configuration

This plugin extends the HardhatUserConfig's EtherscanConfig object with the Cronoscan configurations.

You should define your own Cronoscan API key.

This is an example of how to set it. Replace `{YOUR_CRONOSCAN_API_KEY}` and  `{YOUR_CRONOSCAN_TESTNET_API_KEY}` with your Cronoscan API key:
```
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
      cronosTestnet: "{YOUR_CRONOSCAN_TESTNET_API_KEY}",
    },
    customChains: [
      // You can keep other Etherscan custom chains configurations as long as 
      // they do not overwrite the "cronos" network
      {
        network: "MyEVMChain"
        ...
      }
    }]
  },
};

export default config;
```

## License

This project is licensed under [Apache 2.0](./LICENSE).
