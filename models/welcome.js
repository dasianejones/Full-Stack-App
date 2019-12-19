const mongoose = require("./connection");

const Schema = mongoose.Schema;

const WelcomeSchema = new Schema({
  country: String,
  state: String,
  zipcode: String
});

const welcomeCollection = mongoose.model("Welcome", WelcomeSchema);

const getAllWelcome = () => {
  return welcomeCollection.find({});
};

const getWelcomeById = id => {
  return welcomeCollection.findById(id);
};

const createWelcome = welcomeObject => {
  return welcomeCollection.create(welcomeObject);
};

const deleteWelcome = id => {
  return welcomeCollection.deleteOne({ _id: id });
};

const updateWelcome = (id, updatedWelcome) => {
  return welcomeCollection.updateOne({ _id: id }, updatedWelcome);
};

module.exports = {
  getAllWelcome,
  getWelcomeById,
  createWelcome,
  deleteWelcome,
  updateWelcome
};
