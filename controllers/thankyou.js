const express = require("express");

const loginApi = require("../models/login.js");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  loginApi
    .getAllLogin()
    .then(allLogin => {
      console.log(allLogin);
      res.render("login/allLogin", { allLogin });
    })
    .catch(error => {
      console.log("Error getting all login");
      console.log(error);
      res.send(error);
    });
});

loginRouter.get("/new", (req, res) => {
  res.render("login/acctinfo");
});

loginRouter.get("/:id/edit", (req, res) => {
  loginApi
    .getLoginById(req.params.id)
    .then(login => {
      res.render("login/editLogin", { login });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

loginRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  loginApi
    .getLoginById(req.params.id)
    .then(singleLogin => {
      res.render("login/singleLogin", { singleLogin });
    })
    .catch(error => {
      console.log("Error getting single login");
      console.log(error);
      res.send("Failed to retrieve login");
    });
});

loginRouter.post("/", (req, res) => {
  const newLogin = req.body;

  loginApi
    .createLogin(newLogin)
    .then(() => {
      console.log(newLogin);
      res.redirect("/login");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

loginRouter.put("/:id", (req, res) => {
  const loginId = req.params.id;
  const loginData = req.body;

  loginApi
    .updateLogin(loginId, loginData)
    .then(() => {
      console.log(loginId);
      res.redirect(`/login/${loginId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

loginRouter.delete("/:id", (req, res) => {
  loginApi
    .deleteLogin(req.params.id)
    .then(() => {
      console.log();
      res.redirect("/login");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  loginRouter
};
