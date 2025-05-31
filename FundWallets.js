import { Keypair, VersionedTransaction, Connection } from "@solana/web3.js";
import bs58 from "bs58";
import axios from "axios";

/////////////////////////////// CONFIG //////////////////////////////////////
const API_KEY = process.env.PUMPVIAL_API_KEY;
const RPC_URL = ""; // Visit Helius.dev
const connection = new Connection(RPC_URL, "confirmed");
const FUNDER_PRIVATE_KEY = "Enter the funder's private key here";
const funderKeypair = Keypair.fromSecretKey(bs58.decode(FUNDER_PRIVATE_KEY));

const wallets = [
  { publicKey: "NkrHERKzAetSxbrWenirWbrd9YZ3kiaLWeeniQ", amount: "0.33" },
  { publicKey: "xbrWSxyfrKC8kiQfSxrWSxyfeni7EshZBvp6Qb", amount: "0.2" },
  // ... up to 50
];
//////////////////////////////// END ////////////////////////////////////////

const payload = {
  funderPubKey: funderKeypair.publicKey,
  wallets,
};

const fundWallets = async () => {
  const URL = "https://api.pumpvial.com/fund-wallets";

  try {
    const request = await axios.post(URL, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });

    const { serializedTransaction } = request.data;
    const serialized = Uint8Array.from(
      Buffer.from(serializedTransaction, "base64")
    );

    const transaction = VersionedTransaction.deserialize(serialized);
    transaction.sign([funderKeypair]);

    const signature = await connection.sendTransaction(transaction);
    console.log(`Success: https://solscan.io/tx/${signature}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

fundWallets();
