const mongoose = require("./connection");

const Schema = mongoose.Schema;

const WorksSchema = new Schema({
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const WorksCollection = mongoose.model("Works", WorksSchema);

const getAllWorks = () => {
  return WorksCollection.find({});
};

const getWorksById = id => {
  return WorksCollection.findById(id);
};

const createWorks = WorksObject => {
  return WorksCollection.create(WorksObject);
};

const deleteWorks = id => {
  return WorksCollection.deleteOne({ _id: id });
};

const updateWorks = (id, updatedWorks) => {
  return WorksCollection.updateOne({ _id: id }, updatedWorks);
};

module.exports = {
  getAllWorks,
  getWorksById,
  createWorks,
  deleteWorks,
  updateWorks
};
