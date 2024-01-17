const { getAllProductsFromAPI } = require("../controller/productController");
const express = require("express"),
  router = new express.Router();

router.get("/get-products", getAllProductsFromAPI);

module.exports = router;
