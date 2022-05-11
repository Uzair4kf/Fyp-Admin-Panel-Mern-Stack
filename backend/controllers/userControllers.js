import User from "../models/userModel.js";
const getUsers = async (req, res) => {
  console.log(req.body);
  const users = await User.find({});

  res.json(users);
};
export { getUsers };
