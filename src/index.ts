import "@nomiclabs/hardhat-etherscan";
import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.etherscan.customChains.push({
      network: "cronos",
      chainId: 25,
      urls: {
        apiURL: "https://api.cronoscan.com/api",
        browserURL: "https://cronoscan.com/",
      }
    });
  }
);
