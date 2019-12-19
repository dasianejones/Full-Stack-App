const mongoose = require("./connection");

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const LoginCollection = mongoose.model("Login", LoginSchema);

const getAllLogin = () => {
  return LoginCollection.find({});
};

const getLoginById = id => {
  return LoginCollection.findById(id);
};

const createLogin = LoginObject => {
  return LoginCollection.create(LoginObject);
};

const deleteLogin = id => {
  return LoginCollection.deleteOne({ _id: id });
};

const updateLogin = (id, updatedLogin) => {
  return LoginCollection.updateOne({ _id: id }, updatedLogin);
};

module.exports = {
  getAllLogin,
  getLoginById,
  createLogin,
  deleteLogin,
  updateLogin
};
