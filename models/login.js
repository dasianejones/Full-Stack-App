const mongoose = require("./connection");

const Schema = mongoose.Schema;

const IssuesSchema = new Schema({
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const issuesCollection = mongoose.model("Issues", IssuesSchema);

const getAllIssues = () => {
  return issuesCollection.find({});
};

const getIssuesById = id => {
  return issuesCollection.findById(id);
};

const createIssues = issuesObject => {
  return issuesCollection.create(issuesObject);
};

const deleteIssues = id => {
  return issuesCollection.deleteOne({ _id: id });
};

const updateIssues = (id, updatedIssues) => {
  return issuesCollection.updateOne({ _id: id }, updatedIssues);
};

module.exports = {
  getAllIssues,
  getIssuesById,
  createIssues,
  deleteIssues,
  updateIssues
};
