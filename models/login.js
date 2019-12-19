const mongoose = require("./connection");

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  email: String,
  password: String
});

const loginCollection = mongoose.model("Login", LoginSchema);

const getAllLogin = () => {
  return loginCollection.find({});
};

const getLoginById = id => {
  return loginCollection.findById(id);
};

const createLogin = LoginObject => {
  return loginCollection.create(LoginObject);
};

const deleteLogin = id => {
  return loginCollection.deleteOne({ _id: id });
};

const updateLogin = (id, updatedLogin) => {
  return loginCollection.updateOne({ _id: id }, updatedLogin);
};

module.exports = {
  getAllLogin,
  getLoginById,
  createLogin,
  deleteLogin,
  updateLogin
};
