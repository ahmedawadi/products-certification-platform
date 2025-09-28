import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const MODULE_ADDRESS =
  "0x228eb5394465b40e14c0a421ab2da5b330aa5ea723b21dfd95bd8bb6a9c9a0d1";
export const MODULE_NAME = "registry";
export const RESOURCE_TYPE = `${MODULE_ADDRESS}::${MODULE_NAME}::ProductRegistry`;

// src/aptosClient.js
import { AptosClient } from "aptos";

// URL du fullnode devnet Aptos
const NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";

export const client = new AptosClient(NODE_URL);

const config = new AptosConfig({ network: Network.DEVNET });
export const aptos = new Aptos(config);
