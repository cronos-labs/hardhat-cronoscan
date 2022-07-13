// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";

import { useEnvironment } from "./helpers";

describe("Cronoscan Hardhat plugin", function () {
  useEnvironment("hardhat-project");

  it("Should add the Cronoscan config to the etherscan config", function () {
    assert.deepEqual(this.hre.config.etherscan.customChains, [
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
          apiURL: "https://api-testnet.cronoscan.com/api",
          browserURL: "https://testnet.cronoscan.com/",
        },
      },
    ]);
  });
});
