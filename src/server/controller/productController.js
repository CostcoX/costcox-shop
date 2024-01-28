import {
  getAllCategories,
  getPaginatedProducts,
} from "../services/productService";

export const getAllProductsFromAPI = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;
    if (!pageNumber) {
      res.json({ message: "Missing page number" });
    }
    if (!pageSize) {
      res.json({ message: "Missing page size" });
    }
    const allProducts = await getPaginatedProducts(req, res);
    res.status(200).json(allProducts);
  } catch (error) {
    console.log("error", error);
  }
};

export const getCategoriesFromAPI = async (req, res) => {
  try {
    const categories = await getAllCategories(req, res);
    const allCategories = categories.map((category) => ({
      id: category._id,
      name: category.name,
    }));
    res.status(200).json(allCategories);
  } catch (error) {
    console.log("Error", error);
  }
};
