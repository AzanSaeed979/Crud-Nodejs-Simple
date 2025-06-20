const User = require("../models/usermodel");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.render("user", { users });
};

exports.createUser = async (req, res) => {
  const { carname, carcolor, carmodel } = req.body;
  await User.create({ carname, carcolor, carmodel });
  res.redirect("/");
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/");
};

exports.showeditForm = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("edit", { user, id: req.params.id });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { carname, carcolor, carmodel } = req.body;
  await User.findByIdAndUpdate(id, { carname, carcolor, carmodel });
  res.redirect("/");
};
