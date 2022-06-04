import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subcategoryRoutes from "./routes/subcategoryRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import Product from "./models/productModel.js";
const app = express();
dotenv.config();
connectDb();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "Images");
  },
  filename: (req, file, callback) => {
    console.log("file :", file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage: storage });
app.use("/images");
app.get("/images", async (req, res) => {
  console.log("req", req);
  const products = await Product.find({});
  res.json("jwfn");
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
