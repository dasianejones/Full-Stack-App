const express = require("express");

const loginApi = require("../models/login.js");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  loginApi
    .getAllLogin()
    .then(alllogin => {
      res.render("login/alllogin", { alllogin });
    })
    .catch(error => {
      console.log("Error getting all login");
      console.log(error);
      res.send(error);
    });
});

loginRouter.get("/new", (req, res) => {
  res.render("login/createlogin");
});

loginRouter.get("/:id/edit", (req, res) => {
  loginApi
    .getLoginById(req.params.id)
    .then(login => {
      res.render("login/editlogin", { login });
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
    .then(singlelogin => {
      res.render("login/singlelogin", { singlelogin });
    })
    .catch(error => {
      console.log("Error getting single login");
      console.log(error);
      res.send("Failed to retrieve login");
    });
});

loginRouter.post("/", (req, res) => {
  const newlogin = req.body;

  loginApi
    .createLogin(newlogin)
    .then(() => {
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
