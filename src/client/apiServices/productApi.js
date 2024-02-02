import { get } from "../clientApiService/apiService";

export const getCategories = () => {
  const categories = get("/api/product/getCategories");
  return categories;
};

export const getAllProducts = () => {
  const allProducts = get("/api/product/get-products");
  return allProducts;
};
