import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import { upload } from "../server.js";
const up = upload;
const router = express.Router();

router.route("/").get(getProducts).post(up?.single("image"), createProduct);

router
  .use(express.json())
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
