import express from "express";
import dotenv from "dotenv";

import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subcategoryRoutes from "./routes/subcategoryRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import sliderRoutes from "./routes/sliderRoutes.js";
import Product from "./models/productModel.js";
import multer from "multer";
import fs from "fs-extra";
import path from "path";
import uploadRoutes from "./routes/uploadRoutes.js";
const app = express();
dotenv.config();
connectDb();

app.use("/ecom-product-list", productRoutes);
app.use("/ecom-customers", userRoutes);

app.use("/ecom-categories", categoryRoutes);
app.use("/ecom-subcategories", subcategoryRoutes);
app.use("/ecom-calendar", calendarRoutes);
app.use("/upload", uploadRoutes);
app.use("/cart", cartRoutes);
app.use("/Slider", sliderRoutes);
const __dirname = path.resolve();
app.use(
  "/package/uploads",
  express.static(path.join(__dirname, "/package/uploads"))
);

// fs.copy(
//   "Users/limia/Desktop/Dummy Admin Temp",
//   "../../../Fyp UserSide",
//   (err) => {
//     if (err) return console.error(err);
//     console.log("success!");
//   }
// );

const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
