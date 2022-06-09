import { HardhatUserConfig } from "hardhat/types";

// Import plugin
import "../../../src/index";

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: "dummy-api-key"
  }
};

export default config;
