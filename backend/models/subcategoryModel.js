import mongoose from "mongoose";

const subcategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
     parentId: {
      type: String,
      required: false,
    },
  },
  {
    collection: "subcategories",
  }
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
