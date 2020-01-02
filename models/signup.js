const mongoose = require("./connection");

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  email: String,
  phonenumber: Number,
  password: String
});

const signUpCollection = mongoose.model("signUp", SignUpSchema);

const getAllSignUp = () => {
  return signUpCollection.find({});
};

const getSignUpById = id => {
  return signUpCollection.findById(id);
};

const createSignUp = signUpObject => {
  return signUpCollection.create(signUpObject);
};

const deleteSignUp = id => {
  return signUpCollection.deleteOne({ _id: id });
};

const updateSignUp = (id, updatedsignUp) => {
  return signUpCollection.updateOne({ _id: id }, updatedsignUp);
};

module.exports = {
  getAllSignUp,
  getSignUpById,
  createSignUp,
  deleteSignUp,
  updateSignUp
};
