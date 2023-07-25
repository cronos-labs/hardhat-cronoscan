# Cronos Hardhat Contract Verification plugin

Hardhat plugin for integration with Cronoscan and Cronos Testnet Explorer's contract verification service.

This plugin needs to be used in conjunction with the [hardhat-verify](https://www.npmjs.com/package/@nomicfoundation/hardhat-verify) plugin.

## Features

Verify the source code for your Solidity contracts on [Cronoscan](https://cronoscan.com/) and [Cronos Testnet Explorer](https://cronos.org/explorer/testnet3).

## Installation

### 1. Install the package

```
# Install hardhat-etherscan plugin
npm install --save-dev @nomicfoundation/hardhat-verify

# Install hardhat-cronoscan plugin
npm install --save-dev @cronos-labs/hardhat-cronoscan
```

### 2. Import the plugins

In your `hardhat.config.ts`, import the two plugins:
```
...
import "@nomiclabs/hardhat";
import "@nomicfoundation/hardhat-verify";
import "@cronos-labs/hardhat-cronoscan";
...
```

### 3. Define your API key

In your project's `hardhat.config.ts`, append to your existing configurations:
```
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
    },
  },
};
```

Replace `{YOUR_CRONOSCAN_API_KEY}` with your Cronoscan API key. You can generate your API key by creating an Cronoscan account and generate it [here](https://cronoscan.com/myapikey).

Cronos Testnet Explorer does not require any API key.

## Tasks

This plugin add the [Cronos](https://cronos.org) network to the `verify` task provided by [hardhat-verify](https://www.npmjs.com/package/@nomicfoundation/hardhat-verify). With this plugin the `verify` task is able to verify Cronos contracts through [Cronoscan](https://cronoscan.org) and [Cronos Testnet Explorer](https://cronos.org/explorer/testnet3)'s service.

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

For more advance usage, please refer to hardhat-verify's [documentation](https://www.npmjs.com/package/@nomicfoundaation/hardhat-verify).

## Required plugins

- [hardhat-verift](https://www.npmjs.com/package/@nomicfoundaation/hardhat-verify)

## Configuration

This plugin extends the HardhatUserConfig's EtherscanConfig object with the Cronoscan configurations.

You should define your own Cronoscan API key. Cronos Testnet Explorer does not require any API key. However, `hardhat-verify` pluging still require you provide a dummy API key for it.

This is an example of how to set it. Replace `{YOUR_CRONOSCAN_API_KEY}` with your Cronoscan API key:
```
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
    },
    customChains: [
      // You can keep other Etherscan custom chains configurations as long as 
      // they do not overwrite the "cronos" network and "cronosTestnet" network
      {
        network: "MyEVMChain"
        ...
      }
    }]
  },
};

export default config;
```

## Using Hardhat without this Plugin

This plugin appends `etherscan` configurations for Cronoscan (Cronos Mainnet) and Cronos Testnet Explorer for you. If you do not want to use this plugin, here is a simple `hardhat.config.ts` that can provide the same functionalities.

```
...
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";
...

const config: HardhatUserConfig = {
  ...
  networks: {
    cronos: {
      chainId: 25,
      url: "https://evm.cronos.org",
      accounts: ["{YOUR_DEPLOYER_PRIVATE_KEY}"]
    }
    cronosTestnet: {
      chainId: 338,
      url: "https://evm-t3.cronos.org",
      accounts: ["{YOUR_DEPLOYER_PRIVATE_KEY}"]
    }
  },
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
      // No API key is required for Cronos Testnet Explorer but hardhat-verify requires an API key
      // must be present so a dummy string is provided
      cronosTestnet: "no-api-key-required",
    },
    customNetworks: [
      // You can keep other Etherscan custom chains configurations as long as 
      // they do not overwrite the "cronos" and "cronosTestnet" network
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://cronoscan.com/",
        },
      },
      {
        network: "cronosTestnet",
        chainId: 338,
        urls: {
          apiURL: "https://cronos.org/explorer/testnet3/api",
          browserURL: "https://cronos.org/explorer/testnet3/",
        },
      }
  }
};

export default config;

```

## License

This project is licensed under [Apache 2.0](./LICENSE).
