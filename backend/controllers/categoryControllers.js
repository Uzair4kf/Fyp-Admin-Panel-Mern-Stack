import Category from "../models/categoryModel.js";
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
export { getCategory, createCategory, updateCategory };
