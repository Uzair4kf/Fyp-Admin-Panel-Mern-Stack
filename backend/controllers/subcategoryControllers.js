import Subcategory from "../models/subcategoryModel.js";
const getSubcategory = async (req, res) => {
  const subcategories = await Subcategory.find({});

  res.json(subcategories);
};

const createSubcategory = async (req, res) => {
  const subcategory = new Subcategory({
    name: "Sample name",

    image: "/",

    description: "Sample description",
    parentId: "",
  });
  const createdSubcategory = await subcategory.save();

  res.status(201).json(createdSubcategory);
};
const deleteSubcategory = async (req, res) => {
  const subcategory = await Subcategory.findById(req.params.id);
  if (subcategory) {
    await subcategory.remove();
    res.json({ message: "subcategory removed" });
  } else {
    res.status(404).json({ message: "subcategory not found" });
  }
};
const updateSubcategory = async (req, res) => {
  const { name, description, parentId, image } = req.body;

  const subcategory = await Subcategory.findById(req.params?.id);

  if (subcategory) {
    subcategory.name = name;

    subcategory.description = description;
    subcategory.parentId = parentId;
    subcategory.image = image;
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
