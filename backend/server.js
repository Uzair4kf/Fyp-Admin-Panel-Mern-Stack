const express = require("express");
const products = require("./data/products");
const app = express();
app.get("/ecom-product-list", (req, res) => {
  res.json(products);
});
app.listen(5001, console.log("Server running"));
