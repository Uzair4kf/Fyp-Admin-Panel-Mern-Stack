import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductImage,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router
  .use(express.json())
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
