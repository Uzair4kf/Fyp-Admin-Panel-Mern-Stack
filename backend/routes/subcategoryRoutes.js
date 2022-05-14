import express from "express";
import {
  getSubcategory,
  createSubcategory,
  updateSubcategory,
} from "../controllers/subcategoryControllers.js";
const router = express.Router();
router.route("/").get(getSubcategory).post(createSubcategory);
router.use(express.json()).route("/:id").put(updateSubcategory);
export default router;
