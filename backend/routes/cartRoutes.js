import express from "express";
import { getCartItems } from "../controllers/cartController.js";
const router = express.Router();
router.use(express.json()).route("/").get(getCartItems);
export default router;
