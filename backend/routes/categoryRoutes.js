import express from "express";
import {
  getCategory,
  createCategory,
  updateCategory,
} from "../controllers/categoryControllers.js";
const router = express.Router(); 
router.route("/").get(getCategory).post(createCategory);
router.use(express.json()).route("/:id").put(updateCategory);
export default router;
