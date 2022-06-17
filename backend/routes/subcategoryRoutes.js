import express from "express";
import {
  getSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from "../controllers/subcategoryControllers.js";
const router = express.Router();
router.route("/").get(getSubcategory).post(createSubcategory);
router
  .use(express.json())
  .route("/:id")
  .put(updateSubcategory)
  .delete(deleteSubcategory);
export default router;
