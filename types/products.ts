export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export type ProductListResource = {
  products: Product[]; // Assuming the resource holds a vector<Product>
};

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
}

export interface UpdateProductData extends Partial<CreateProductData> {}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}
