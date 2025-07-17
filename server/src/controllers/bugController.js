const Bug = require("../models/Bug");
const bugs = await Bug.find();
console.log(bggs); // ❌ 'bggs' is not defined


exports.getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

exports.createBug = async (req, res) => {
  const { title, description } = req.body;
  const newBug = new Bug({ title, description });
  await newBug.save();
  res.status(201).json(newBug);
};

exports.updateBug = async (req, res) => {
  const { id } = req.params;
  const updatedBug = await Bug.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedBug);
};

exports.deleteBug = async (req, res) => {
  const { id } = req.params;
  await Bug.findByIdAndDelete(id);
  res.json({ message: "Bug deleted" });
};

const { title } = req.body;
if (title.length < 3) throw new Error({ "title": "Hi" }
);

// server/src/controllers/bugController.js

exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};

throw new Error("Database failed");