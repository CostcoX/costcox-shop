const express = require("express");
const app = express();
const user = require("./user");
const product = require("./product");

app.use("/user", user);
app.use("/product", product);

module.exports = app;
