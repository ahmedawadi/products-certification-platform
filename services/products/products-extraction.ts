import { client, MODULE_ADDRESS, MODULE_NAME } from "@/lib/aptos";
import type { Product } from "@/types/products";

// Fetch all products
export async function retrieveProductsFromServerSide(): Promise<Product[]> {
  try {
    const res = await client.getAccountResource(
      MODULE_ADDRESS,
      `${MODULE_ADDRESS}::${MODULE_NAME}::ProductRegistry`
    );
    console.log(res);
    const rawProducts = (res.data as any).products || [];
    return rawProducts.map((p: any) => ({
      id: String(p.id.value ?? p.id),
      name: p.name.value ?? p.name ?? "",
      description: p.description.value ?? p.description ?? "",
      price: Number(p.price.value ?? p.price ?? 0),
    }));
  } catch (error) {
    console.error("getAllProducts error:", error);
    return []; // fallback
  }
}
