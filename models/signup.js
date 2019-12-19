const mongoose = require("./connection");

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  email: String,
  phonenumber: Number,
  password: String
});

const signUpCollection = mongoose.model("signUp", SignUpSchema);

const getAllsignUp = () => {
  return signUpCollection.find({});
};

const getsignUpById = id => {
  return signUpCollection.findById(id);
};

const createsignUp = signUpObject => {
  return signUpCollection.create(signUpObject);
};

const deletesignUp = id => {
  return signUpCollection.deleteOne({ _id: id });
};

const updatesignUp = (id, updatedsignUp) => {
  return signUpCollection.updateOne({ _id: id }, updatedsignUp);
};

module.exports = {
  getAllsignUp,
  getsignUpById,
  createsignUp,
  deletesignUp,
  updatesignUp
};
