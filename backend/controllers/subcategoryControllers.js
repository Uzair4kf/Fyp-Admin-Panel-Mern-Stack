import Subcategory from "../models/subcategoryModel.js";
import Product from "../models/productModel.js";
const getSubcategory = async (req, res) => {
  const subcategories = await Subcategory.find({});

  res.json(subcategories);
};

const createSubcategory = async (req, res) => {
  const { name, description, parentId, image } = req.body;
  const subcategory = new Subcategory({
    name: name,

    image: image,

    description: description,
    parentId: parentId,
  });
  const createdSubcategory = await subcategory.save();

  res.status(201).json(createdSubcategory);
};
const deleteSubcategory = async (req, res) => {
  const subcategory = await Subcategory.findById(req.params.id);
  if (subcategory) {
    // await subcategory.remove();
    // res.json({ message: "subcategory removed" });

    const products = await Product.find({});
    const exist = [];
    products.filter((product) => {
      exist.push(product.category == subcategory.name);
    });

    if (exist.includes(true)) {
      res.status(200).json({ message: "subcategory has products " });
    } else {
      await subcategory.remove();
      res.json({ message: "subcategory removed" });
    }
  } else {
    res.status(404).json({ message: "subcategory not found" });
  }
};
const updateSubcategory = async (req, res) => {
  const { name, description, parentId, image } = req.body;

  const subcategory = await Subcategory.findById(req.params?.id);

  if (subcategory) {
    if (name) {
      subcategory.name = name;
    }
    if (description) {
      subcategory.description = description;
    }
    if (parentId) {
      subcategory.parentId = parentId;
    }
    if (image) {
      subcategory.image = image;
    }
  } else {
    res.status(400);
    throw new Error("Subcategory error");
  }

  const updatedSubcategory = await subcategory.save();

  res.json(updatedSubcategory);
};
export {
  getSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
};
