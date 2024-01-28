const {
  getAllProductsFromAPI,
  getCategoriesFromAPI,
} = require("../controller/productController");
const express = require("express"),
  router = new express.Router();

router.get("/get-products", getAllProductsFromAPI);
router.get("/getCategories", getCategoriesFromAPI);

module.exports = router;
