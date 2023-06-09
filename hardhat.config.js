require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "http://sepolia-key/example";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "sepolia-key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "etherscan-api";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY || "coinmarket-api";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    //* token: "MATIC",
  },
};
