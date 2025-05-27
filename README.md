# 🧪 Fund Solana Wallets 🧪

Quickly fund up to 50 Solana wallets per transaction. Keep private keys secure in your own code, and sign transaction locally.

---

## Prerequisites

- Get your free API key from https://pumpvial.com

---

## Install Dependencies

`npm i @solana/web3.js bs58 axios`

---

## Request

##### [required] [object]

`funderPubKey`: Public key object of the transaction funder.

##### [required] [array]

`wallets`: Array of wallet objects to be funded.  
`string: publicKey`: Fund recipient wallet address.  
`string: amount`: SOL amount to receive.

---

## Response

`string: serializedTransaction`: Unsigned base64 encoded transaction.

---

Need help? Hop in our Discord: https://discord.gg/WBmZss3jQq  
Official Docs: https://pumpvial.com/https/fund-wallets

---

**Tags:** solana, solana-wallet, solana-wallet-funding, solana-tokens, solana-sdk, solana-web3, solana-transactions, solana-api, pumpfun, pumpvial, crypto-wallet, crypto-funding, blockchain, blockchain-wallet, crypto, cryptocurrency, defi, decentralized-finance, solana-developer, solana-devtools, solana-nft, solana-program, solana-sdk-js, solana-dapp, solana-smart-contracts, solana-bots, solana-automation, solana-trading, solana-token-transfer, solana-sol, web3, web3js, crypto-development, crypto-api, solana-tools, solana-sol-transfer, solana-multisig, solana-transaction-builder, solana-wallet-security, solana-payer, solana-base64, bs58, solana-sdk-tools, solana-transaction-signing, solana-pumpfun, solana-funding-tool
