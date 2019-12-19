const express = require("express");

const welcomeApi = require("../models/welcome.js");

const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res) => {
  welcomeApi
    .getAllWelcome()
    .then(allwelcome => {
      res.render("welcome/allwelcome", { allwelcome });
    })
    .catch(error => {
      console.log("Error getting all welcome");
      console.log(error);
      res.send(error);
    });
});

welcomeRouter.get("/new", (req, res) => {
  res.render("welcome/createwelcome");
});

welcomeRouter.get("/:id/edit", (req, res) => {
  welcomeApi
    .getWelcomeById(req.params.id)
    .then(welcome => {
      res.render("welcome/editwelcome", { welcome });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

welcomeRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  welcomeApi
    .getWelcomeById(req.params.id)
    .then(singlewelcome => {
      res.render("welcome/singlewelcome", { singlewelcome });
    })
    .catch(error => {
      console.log("Error getting single welcome");
      console.log(error);
      res.send("Failed to retrieve welcome");
    });
});

welcomeRouter.post("/", (req, res) => {
  const newwelcome = req.body;

  welcomeApi
    .createWelcome(newwelcome)
    .then(() => {
      res.redirect("/welcome");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

welcomeRouter.put("/:id", (req, res) => {
  const welcomeId = req.params.id;
  const welcomeData = req.body;

  welcomeApi
    .updateWelcome(welcomeId, welcomeData)
    .then(() => {
      res.redirect(`/welcome/${welcomeId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

welcomeRouter.delete("/:id", (req, res) => {
  welcomeApi
    .deleteWelcome(req.params.id)
    .then(() => {
      res.redirect("/welcome");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  welcomeRouter
};
