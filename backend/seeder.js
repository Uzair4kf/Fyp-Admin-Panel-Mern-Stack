import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const importData = async () => {
  try {
    const sampleProducts = products.map((product) => {
      return { ...product };
    });

    let a = await Product.insertMany(sampleProducts);
    console.log(a);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log("jf");
  importData();
}
