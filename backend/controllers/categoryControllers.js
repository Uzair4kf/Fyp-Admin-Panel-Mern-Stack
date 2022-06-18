import Category from "../models/categoryModel.js";
import Subcategory from "../models/subcategoryModel.js";
const getCategory = async (req, res) => {
  const categories = await Category.find({});

  res.json(categories);
};

const createCategory = async (req, res) => {
  const category = new Category({
    name: "Sample name",

    image: "/",

    description: "Sample description",
  });
  const createdCategory = await category.save();

  res.status(201).json(createdCategory);
};
const updateCategory = async (req, res) => {
  const { name, description, image } = req.body;

  const category = await Category.findById(req.params?.id);
  console.log(description);

  if (category) {
    category.name = name;

    category.description = description;
    category.image = image;
  } else {
    res.status(400);
    throw new Error("Category error");
  }

  const updatedCategory = await category.save();

  res.json(updatedCategory);
};
const deletecategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    const subcategories = await Subcategory.find({});

    const exist = [];
    subcategories.filter((subcategory) => {
      exist.push(subcategory.parentId == category.name);
    });

    if( exist.includes(true)){
       res.status(200).json({ message: "category has subcategories " });
    }
    else{
      await category.remove();
      res.json({ message: "category removed" });
    }
   
    
  } else {
    res.status(404).json({ message: "category not found" });
  }
};
export { getCategory, createCategory, updateCategory, deletecategory };
