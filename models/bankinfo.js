const mongoose = require("./connection");

const Schema = mongoose.Schema;

const BankInfoSchema = new Schema({
  signupfree: String,
  learnmore: String,
  signin: String
});

const BankInfoCollection = mongoose.model("BankInfo", BankInfoSchema);

const getAllBankInfo = () => {
  return BankInfoCollection.find({});
};

const getBankInfoById = id => {
  return BankInfoCollection.findById(id);
};

const createBankInfo = BankInfoObject => {
  return BankInfoCollection.create(BankInfoObject);
};

const deleteBankInfo = id => {
  return BankInfoCollection.deleteOne({ _id: id });
};

const updateBankInfo = (id, updatedBankInfo) => {
  return BankInfoCollection.updateOne({ _id: id }, updatedBankInfo);
};

module.exports = {
  getAllBankInfo,
  getBankInfoById,
  createBankInfo,
  deleteBankInfo,
  updateBankInfo
};
