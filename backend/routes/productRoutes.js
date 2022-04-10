import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import product from "../data/products.js";
import Product from "../models/productModel.js";
const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
