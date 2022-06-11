import Slider from "../models/sliderModel.js";

const getSliders = async (req, res) => {
  const sliders = await Slider.find({});

  res.json(sliders);
};

const createSlider = async (req, res) => {
  console.log("req :", req.body);
  const { name, description, image } = req.body;

  const slider = new Slider({
    name: name,

    image: image,

    description: description,
  });
  const createSlider = await slider.save();

  res.status(201).json(createSlider);
};

export { getSliders, createSlider };
