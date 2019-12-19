const express = require("express");

const welcomeApi = require("../models/welcome.js");

const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res) => {
  welcomeApi
    .getAllWelcome()
    .then(allWelcome => {
      res.render("welcome/allWelcome", { allWelcome });
    })
    .catch(error => {
      console.log("Error getting all welcome");
      console.log(error);
      res.send(error);
    });
});

welcomeRouter.get("/new", (req, res) => {
  res.render("welcome/createWelcome");
});

welcomeRouter.get("/:id/edit", (req, res) => {
  welcomeApi
    .getWelcomeById(req.params.id)
    .then(welcome => {
      res.render("welcome/editWelcome", { welcome });
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
    .then(singleWelcome => {
      res.render("welcome/singleWelcome", { singleWelcome });
    })
    .catch(error => {
      console.log("Error getting single welcome");
      console.log(error);
      res.send("Failed to retrieve welcome");
    });
});

welcomeRouter.post("/", (req, res) => {
  const newWelcome = req.body;

  welcomeApi
    .createWelcome(newWelcome)
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
