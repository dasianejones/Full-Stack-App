const mongoose = require("./connection");

const Schema = mongoose.Schema;

const MonthlyBudgetSchema = new Schema({
  monthlyincome: Number,
  monthlyexpenses: Number,
  monthlybudget: Number
});

const monthlyBudgetCollection = mongoose.model(
  "MonthlyBudget",
  MonthlyBudgetSchema
);

const getAllMonthlyBudget = () => {
  return monthlyBudgetCollection.find({});
};

const getMonthlyBudgetById = id => {
  return monthlyBudgetCollection.findById(id);
};

const createMonthlyBudget = MonthlyBudgetObject => {
  return monthlyBudgetCollection.create(MonthlyBudgetObject);
};

const deleteMonthlyBudget = id => {
  return monthlyBudgetCollection.deleteOne({ _id: id });
};

const updateMonthlyBudget = (id, updatedMonthlyBudget) => {
  return monthlyBudgetCollection.updateOne({ _id: id }, updatedMonthlyBudget);
};

module.exports = {
  getAllMonthlyBudget,
  getMonthlyBudgetById,
  createMonthlyBudget,
  deleteMonthlyBudget,
  updateMonthlyBudget
};
