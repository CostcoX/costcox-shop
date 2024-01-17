import { get } from "../clientApiService/apiService";

export const getAllProducts = () => {
  const allProducts = get("/api/product/get-products");
};
