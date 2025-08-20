import { sdk, type TransactionDto } from "@yieldxyz/sdk";
import BigNumber from "bignumber.js";
import { createWalletClient, http } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { base } from "viem/chains";

const mnemonic = process.env.MNEMONIC;
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const yieldId = process.env.YIELD_ID;
const actionType = process.env.ACTION_TYPE;

if (
  !mnemonic ||
  !apiKey ||
  !apiUrl ||
  !yieldId ||
  (actionType !== "enter" && actionType !== "exit")
) {
  throw new Error("invalid env variables");
}

sdk.configure({ apiKey, baseURL: apiUrl });

const account = mnemonicToAccount(mnemonic);

const client = createWalletClient({
  chain: base,
  transport: http(),
  account,
});

const transactions = await (actionType === "enter"
  ? sdk.api.enterYield({
      yieldId,
      address: account.address,
      arguments: { amount: BigNumber("0.0001").toString() },
    })
  : sdk.api.exitYield({
      yieldId,
      address: account.address,
      arguments: { amount: BigNumber("0.0001").toString() },
    })
).then((res) =>
  res.transactions.filter(
    (
      tx,
    ): tx is TransactionDto & {
      status: "WAITING_FOR_SIGNATURE";
      unsignedTransaction: string;
    } =>
      (tx.status === "WAITING_FOR_SIGNATURE" || tx.status === "CREATED") &&
      !!tx.unsignedTransaction,
  ),
);

const sendTransactionsResults: {
  txHash: string;
  explorerUrl: string | null | undefined;
}[] = [];

for (const tx of transactions) {
  const parsedTx = JSON.parse(tx.unsignedTransaction);
  const preparedTx = await client.prepareTransactionRequest({
    to: parsedTx.to,
    value: parsedTx.value,
    data: parsedTx.data,
    maxFeePerGas: parsedTx.maxFeePerGas,
    maxPriorityFeePerGas: parsedTx.maxPriorityFeePerGas,
    gas: parsedTx.gasLimit,
    type: "eip1559",
  });

  const txHash = await client.sendTransaction(preparedTx);
  await sdk.api.submitTransactionHash(tx.id, { hash: txHash });

  let txStatusCheckTimes = 0;

  while (txStatusCheckTimes < 10) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const txResult = await sdk.api.getTransaction(tx.id);

    if (txResult.status === "CONFIRMED") {
      break;
    }

    txStatusCheckTimes++;
  }

  sendTransactionsResults.push({
    txHash,
    explorerUrl: `${client.chain.blockExplorers.default.url}/tx/${txHash}`,
  });
}

const positions = await sdk.api.getYieldBalances(yieldId, {
  address: account.address,
});

console.log({
  positions: JSON.stringify(positions, null, 2),
  sendTransactionsResults,
});
