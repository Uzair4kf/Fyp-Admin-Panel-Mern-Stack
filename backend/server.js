import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();
dotenv.config();
connectDb();

app.use("/ecom-product-list", productRoutes);
app.get("/ecom-product-list", (req, res) => {
  res.json(products);
});
products.forEach((y) => {
  console.log(y);
});
console.log("heb");
app.get("/ecom-product-list/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  res.json(
    products.forEach((y) => {
      return y;
    })
  );
});
const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV}mode on port ${PORT}`)
);
