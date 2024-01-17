import CostcoXRestClient from "../helpers/CostcoXRestClient";

const productService = new CostcoXRestClient(
  "https://costcoxbackend-production.up.railway.app"
);

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productService.get(
      "/api/product/get-all-product"
    );
    return allProducts;
  } catch (error) {
    console.log("Error", error);
  }
};
