import CostcoXRestClient from "../helpers/CostcoXRestClient";

const productService = new CostcoXRestClient(
  "https://costcoxbackend-production.up.railway.app"
);

export const getPaginatedProducts = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;
    const allProducts = await productService.get(
      `/api/product/getProducts/${pageNumber}/${pageSize}`
    );
    return allProducts;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await productService.get(
      "/api/category/get-all-category"
    );
    return categories;
  } catch (error) {
    console.log("Error", error);
  }
};
