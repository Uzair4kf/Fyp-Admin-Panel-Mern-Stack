import mongoose from "mongoose";

const sliderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Slider = mongoose.model("Slider", sliderSchema);

export default Slider;
