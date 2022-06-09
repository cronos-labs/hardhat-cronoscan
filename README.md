# Hardhat Cronoscan plugin

Hardhat plugin for integration with Cronoscan's contract verification service.

This plugin needs to be used in conjunction with the [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) plugin.

## Features

Verify the source code for your Solidity contracts on [Cronoscan](https://cronoscan.com/).

Please refer to [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) for more details.

## Installation

### 1. Install the package
```
# Install hardhat-etherscan plugin
npm install --save-dev @nomiclabs/hardhat-etherscan

# Install hardhat-cronoscan plugin
npm install --save-dev @cronos-labs/hardhat-cronoscan
```

### 2. Import the plugins
In your `hardhat.config.ts`, import the two plugins:
```
...
import "@nomiclabs/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "./cronos-plugin";
...
```

### 3. Define your Cronoscan API key

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

## Required plugins

- [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan)

## Configuration

This plugin extends the HardhatUserConfig's EtherscanConfig object with the Cronoscan configurations.

You should define your own Cronoscan API key.

This is an example of how to set it. Replace `{YOUR_CRONOSCAN_API_KEY}` with your Cronoscan API key:
```
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      cronos: "{YOUR_CRONOSCAN_API_KEY}",
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
