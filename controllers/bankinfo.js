const express = require("express");

const bankInfoApi = require("../models/bankInfo.js");

const bankInfoRouter = express.Router();

bankInfoRouter.get("/", (req, res) => {
  bankInfoApi
    .getAllBankInfo()
    .then(allbankInfo => {
      res.render("bankinfo/allBankInfo", { allbankInfo });
    })
    .catch(error => {
      console.log("Error getting all bankInfo");
      console.log(error);
      res.send(error);
    });
});

bankInfoRouter.get("/new", (req, res) => {
  res.render("bankinfo/createBankInfo");
});

bankInfoRouter.get("/:id/edit", (req, res) => {
  bankInfoApi
    .getBankInfoById(req.params.id)
    .then(bankInfo => {
      res.render("bankinfo/editBankInfo", { bankInfo });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

bankInfoRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  bankInfoApi
    .getBankInfoById(req.params.id)
    .then(singlebankInfo => {
      res.render("bankinfo/singleBankInfo", { singlebankInfo });
    })
    .catch(error => {
      console.log("Error getting single bankInfo");
      console.log(error);
      res.send("Failed to retrieve bankInfo");
    });
});

bankInfoRouter.post("/", (req, res) => {
  const newbankInfo = req.body;

  bankInfoApi
    .createBankInfo(newbankInfo)
    .then(() => {
      res.redirect("/monthlybudget");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

bankInfoRouter.put("/:id", (req, res) => {
  const bankInfoId = req.params.id;
  const bankInfoData = req.body;

  bankInfoApi
    .updateBankInfo(bankInfoId, bankInfoData)
    .then(() => {
      res.redirect(`/bankInfo/${bankInfoId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

bankInfoRouter.delete("/:id", (req, res) => {
  bankInfoApi
    .deleteBankInfo(req.params.id)
    .then(() => {
      res.redirect("/bankInfo");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  bankInfoRouter
};
