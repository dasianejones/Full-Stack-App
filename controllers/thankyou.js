const express = require("express");

const thankYouApi = require("../models/login.js");

const thankYouRouter = express.Router();

thankYouRouter.post("/", (req, res) => {
  const newLogin = req.body;

  thankYouApi
    .createLogin(newLogin)
    .then(() => {
      console.log(newLogin);
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  thankYouRouter
};
