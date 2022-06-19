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
  const {
    name,
    price,
    description,
    category,
    quantity,
    image,
    secondaryimage,
  } = req.body;
  const product = new Product({
    name: name,
    price: price,
    image: image,
    secondaryimage: secondaryimage,
    category: category,
    quantity: quantity,
    numReviews: 0,
    description: description,
  });
  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
};

const updateProduct = async (req, res) => {
  console.log("req :", req.params.id);
  const {
    name,
    price,
    description,
    category,
    quantity,
    image,
    secondaryimage,
  } = req.body;

  console.log(" name", description);
  const product = await Product.findById(req.params?.id);

  if (product) {
    if (name) {
      product.name = name;
    }
    if (price) {
      product.price = price;
    }
    if (description) {
      product.description = description;
    }
    if (category) {
      product.category = category;
    }

    if (quantity) {
      product.quantity = quantity;
    }
    if (image) {
      product.image = image;
    }
    if (secondaryimage) {
      product.secondaryimage = secondaryimage;
    }
  } else {
    res.status(400);
    throw new Error("Product error");
  }

  const updatedProduct = await product.save();
  console.log("updatedProduct :", updatedProduct);

  console.log(updatedProduct);
  res.json(updatedProduct);
};
// const updateProduct = async (req, res) => {
//   const price = req.body?.price;
//   const description = req.body?.description;
//   const name = req.body?.name;
//   const category = req.body?.category;

//   const product = await Product.findById(req.params?.id);
// console.log(req.params?.id)
//   if (product) {
//     product.name = name;
//     product.price = price;
//     product.description = description;
//     product.category = category;
//   } else {
//     res.status(400);
//     throw new Error("Product error");
//   }
//   const updatedProduct = await product.save();
//   res.json(updatedProduct);
// };

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
