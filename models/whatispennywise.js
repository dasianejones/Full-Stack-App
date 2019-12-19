const mongoose = require("./connection");

const Schema = mongoose.Schema;

const WhatSchema = new Schema({
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const WhatCollection = mongoose.model("What", WhatSchema);

const getAllWhat = () => {
  return WhatCollection.find({});
};

const getWhatById = id => {
  return WhatCollection.findById(id);
};

const createWhat = WhatObject => {
  return WhatCollection.create(WhatObject);
};

const deleteWhat = id => {
  return WhatCollection.deleteOne({ _id: id });
};

const updateWhat = (id, updatedWhat) => {
  return WhatCollection.updateOne({ _id: id }, updatedWhat);
};

module.exports = {
  getAllWhat,
  getWhatById,
  createWhat,
  deleteWhat,
  updateWhat
};
