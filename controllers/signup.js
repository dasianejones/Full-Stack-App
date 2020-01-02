const express = require("express");

const signUpApi = require("../models/signup.js");

const signUpRouter = express.Router();

signUpRouter.get("/", (req, res) => {
  signUpApi
    .getAllSignUp()
    .then(allsignUp => {
      res.render("signup/allSignUp", { allsignUp });
    })
    .catch(error => {
      console.log("Error getting all signUp");
      console.log(error);
      res.send(error);
    });
});

signUpRouter.get("/new", (req, res) => {
  res.render("signUp/createsignUp");
});

signUpRouter.get("/:id/edit", (req, res) => {
  signUpApi
    .getSignUpById(req.params.id)
    .then(signUp => {
      res.render("signUp/editsignUp", { signUp });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

signUpRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  signUpApi
    .getSignUpById(req.params.id)
    .then(singlesignUp => {
      res.render("signUp/singlesignUp", { singlesignUp });
    })
    .catch(error => {
      console.log("Error getting single signUp");
      console.log(error);
      res.send("Failed to retrieve signUp");
    });
});

signUpRouter.post("/", (req, res) => {
  const newsignUp = req.body;

  signUpApi
    .createSignUp(newsignUp)
    .then(() => {
      res.redirect("/bankinfo/");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

signUpRouter.put("/:id", (req, res) => {
  const signUpId = req.params.id;
  const signUpData = req.body;

  signUpApi
    .updateSignUp(signUpId, signUpData)
    .then(() => {
      res.redirect(`/signUp/${signUpId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

signUpRouter.delete("/:id", (req, res) => {
  signUpApi
    .deleteSignUp(req.params.id)
    .then(() => {
      res.redirect("/signUp");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  signUpRouter
};
