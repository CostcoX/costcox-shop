import { getAllProducts } from "../services/productService";

export const getAllProductsFromAPI = async (req, res) => {
  try {
    const allProducts = await getAllProducts(req, res);
    res.status(200).json(allProducts);
  } catch (error) {
    console.log("error", error);
  }
};
