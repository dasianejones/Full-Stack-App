const mongoose = require("./connection");

const Schema = mongoose.Schema;

const BankInfoSchema = new Schema({
  bankname: String,
  bankaccount: Number,
  bankrouting: Number
});

const bankInfoCollection = mongoose.model("BankInfo", BankInfoSchema);

const getAllBankInfo = () => {
  return bankInfoCollection.find({});
};

const getBankInfoById = id => {
  return bankInfoCollection.findById(id);
};

const createBankInfo = BankInfoObject => {
  return bankInfoCollection.create(BankInfoObject);
};

const deleteBankInfo = id => {
  return bankInfoCollection.deleteOne({ _id: id });
};

const updateBankInfo = (id, updatedBankInfo) => {
  return bankInfoCollection.updateOne({ _id: id }, updatedBankInfo);
};

module.exports = {
  getAllBankInfo,
  getBankInfoById,
  createBankInfo,
  deleteBankInfo,
  updateBankInfo
};
