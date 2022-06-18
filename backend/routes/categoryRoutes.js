import express from "express";
import {
  getCategory,
  createCategory,
  updateCategory,
  deletecategory,
} from "../controllers/categoryControllers.js";
const router = express.Router();
router.use(express.json()).route("/").get(getCategory).post(createCategory);
router
  .use(express.json())
  .route("/:id")
  .put(updateCategory)
  .delete(deletecategory);
export default router;
