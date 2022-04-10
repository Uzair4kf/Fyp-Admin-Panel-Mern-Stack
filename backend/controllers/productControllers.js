import Product from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.json(products);
};
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
const createProduct = async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 100,
    image: "/",
    brand: "Sample brand",
    rating: 2,
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

const updateProduct = async (req, res) => {
  const price = req.body?.price;
  const description = req.body?.description;
  const name = req.body?.name;
  const category = req.body?.category;
  console.log(await name);
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
  }
  const updatedProduct = await product.save();
  res.json(updatedProduct);
};

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
