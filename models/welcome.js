const mongoose = require("./connection");

const Schema = mongoose.Schema;

const WelcomeSchema = new Schema({
  signupfree: String,
  learnmore: String,
  signin: String
});

const WelcomeCollection = mongoose.model("Welcome", WelcomeSchema);

const getAllWelcome = () => {
  return WelcomeCollection.find({});
};

const getWelcomeById = id => {
  return WelcomeCollection.findById(id);
};

const createWelcome = WelcomeObject => {
  return WelcomeCollection.create(WelcomeObject);
};

const deleteWelcome = id => {
  return WelcomeCollection.deleteOne({ _id: id });
};

const updateWelcome = (id, updatedWelcome) => {
  return WelcomeCollection.updateOne({ _id: id }, updatedWelcome);
};

module.exports = {
  getAllWelcome,
  getWelcomeById,
  createWelcome,
  deleteWelcome,
  updateWelcome
};
