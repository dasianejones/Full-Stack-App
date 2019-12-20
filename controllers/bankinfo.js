const express = require("express");

const bankInfoApi = require("../models/bankInfo.js");

const bankInfoRouter = express.Router();

bankInfoRouter.get("/", (req, res) => {
  bankInfoApi
    .getAllBankInfo()
    .then(allbankInfo => {
      res.render("bankInfo/allbankInfo", { allbankInfo });
    })
    .catch(error => {
      console.log("Error getting all bankInfo");
      console.log(error);
      res.send(error);
    });
});

bankInfoRouter.get("/new", (req, res) => {
  res.render("bankInfo/createbankInfo");
});

bankInfoRouter.get("/:id/edit", (req, res) => {
  bankInfoApi
    .getBankInfoById(req.params.id)
    .then(bankInfo => {
      res.render("bankInfo/editbankInfo", { bankInfo });
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
      res.render("bankInfo/singlebankInfo", { singlebankInfo });
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
      res.redirect("/bankInfo");
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
