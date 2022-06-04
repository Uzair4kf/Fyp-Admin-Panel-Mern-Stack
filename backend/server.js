import express from "express";
import dotenv from "dotenv";

import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subcategoryRoutes from "./routes/subcategoryRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import Product from "./models/productModel.js";
import multer from "multer";
import path from "path";
const app = express();
dotenv.config();
connectDb();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("req :", req);

    callback(null, "./Images");
  },
  filename: (req, file, callback) => {
    console.log("file :", file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
app.post("/addnew", upload.single("image"), async (req, res, next) => {
  const product = new Product({
    name: "Sample name",
    price: 100,
    image: "./data/7.jpg",
    brand: "Sample brand",
    rating: 2,
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});
app.use("/ecom-product-list", productRoutes);
app.use("/ecom-customers", userRoutes);

app.use("/ecom-categories", categoryRoutes);
app.use("/ecom-subcategories", subcategoryRoutes);
app.use("/ecom-calendar", calendarRoutes);

const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
