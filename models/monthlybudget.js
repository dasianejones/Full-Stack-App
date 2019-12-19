const mongoose = require("./connection");

const Schema = mongoose.Schema;

const MonthlyBudgetSchema = new Schema({
  signupfree: String,
  learnmore: String,
  signin: String
});

const MonthlyBudgetCollection = mongoose.model(
  "MonthlyBudget",
  MonthlyBudgetSchema
);

const getAllMonthlyBudget = () => {
  return MonthlyBudgetCollection.find({});
};

const getMonthlyBudgetById = id => {
  return MonthlyBudgetCollection.findById(id);
};

const createMonthlyBudget = MonthlyBudgetObject => {
  return MonthlyBudgetCollection.create(MonthlyBudgetObject);
};

const deleteMonthlyBudget = id => {
  return MonthlyBudgetCollection.deleteOne({ _id: id });
};

const updateMonthlyBudget = (id, updatedMonthlyBudget) => {
  return MonthlyBudgetCollection.updateOne({ _id: id }, updatedMonthlyBudget);
};

module.exports = {
  getAllMonthlyBudget,
  getMonthlyBudgetById,
  createMonthlyBudget,
  deleteMonthlyBudget,
  updateMonthlyBudget
};
