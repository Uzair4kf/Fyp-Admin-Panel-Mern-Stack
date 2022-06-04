import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("req :", req);

    callback(null, "../Images");
  },
  filename: (req, file, callback) => {
    console.log("file :", file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const router = express.Router();
 

router.route("/").get(getProducts).post(upload.single("file"), createProduct);

router
  .use(express.json())
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
