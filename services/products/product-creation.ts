import { client, MODULE_ADDRESS, MODULE_NAME } from "@/lib/aptos";
import type { CreateProductData } from "@/types/products";

export default async function createProductOnServerSide(
  data: CreateProductData,
  signer: any // signer/wallet instance
): Promise<string> {
  try {
    console.log(signer);
    const network = await signer.network();
    console.log("Wallet connected to network:", network);
    const payload = {
      type: "entry_function_payload",
      function: `${MODULE_ADDRESS}::${MODULE_NAME}::add_product`, // must match Move function
      type_arguments: [],
      arguments: [data.name, data.description, data.price.toString()],
    };
    console.log(payload);
    // Sign and submit transaction
    const tx = await signer.signAndSubmitTransaction({ payload });

    // Wait for confirmation
    await client.waitForTransaction(tx.hash);

    return tx.hash; // return transaction hash
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}
