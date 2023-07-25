import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig, HttpNetworkConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    if (typeof userConfig.etherscan?.apiKey === 'undefined') {
      config.etherscan.apiKey = {
        cronosTestnet: "no-api-key-required",
      };
    } else {
      if (typeof userConfig.etherscan?.apiKey !== 'string') {
        config.etherscan.apiKey = {
          cronosTestnet: "no-api-key-required",
          ...userConfig.etherscan.apiKey,
        };
      };
    }
    config.etherscan.customChains.push({
      network: "cronos",
      chainId: 25,
      urls: {
        apiURL: "https://api.cronoscan.com/api",
        browserURL: "https://cronoscan.com/",
      },
    });
    config.etherscan.customChains.push({
      network: "cronosTestnet",
      chainId: 338,
      urls: {
        apiURL: "https://cronos.org/explorer/testnet3/api",
        browserURL: "https://cronos.org/explorer/testnet3/",
      },
    });
  },
);
