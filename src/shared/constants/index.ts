export const COIN_LIST = [
  "bitcoin",
  "ethereum", 
  "uniswap",
  "aave",
  "curve-dao-token",
  "chainlink",
  "litecoin",
  "maker",
  "compound-governance-token",
  "the-graph",
  "optimism",
  "arbitrum",
  "avalanche-2",
  "solana",
  "toncoin"
].join(",");
export const API_ENDPOINTS = {
  MAINNET: "https://api.mainnet.com",
  TESTNET: "https://api.testnet.com",
  COINGECKO: "https://api.coingecko.com/api/v3",
  BACKEND: "http://localhost:3000",
} as const;
export const REQUEST_TIMEOUT = 10000;
