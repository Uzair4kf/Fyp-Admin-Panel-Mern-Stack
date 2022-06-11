import express from "express";
import { getSliders, createSlider } from "../controllers/sliderControllers.js";
const router = express.Router();

router.use(express.json()).route("/").get(getSliders).post(createSlider);

export default router;
