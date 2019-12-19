const mongoose = require("./connection");

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const SignupCollection = mongoose.model("Signup", SignupSchema);

const getAllSignup = () => {
  return SignupCollection.find({});
};

const getSignupById = id => {
  return SignupCollection.findById(id);
};

const createSignup = SignupObject => {
  return SignupCollection.create(SignupObject);
};

const deleteSignup = id => {
  return SignupCollection.deleteOne({ _id: id });
};

const updateSignup = (id, updatedSignup) => {
  return SignupCollection.updateOne({ _id: id }, updatedSignup);
};

module.exports = {
  getAllSignup,
  getSignupById,
  createSignup,
  deleteSignup,
  updateSignup
};
