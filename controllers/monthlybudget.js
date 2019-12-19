const express = require("express");

const monthlyBudgetApi = require("../models/monthlyBudget.js");

const monthlyBudgetRouter = express.Router();

monthlyBudgetRouter.get("/", (req, res) => {
  monthlyBudgetApi
    .getAllmonthlyBudget()
    .then(allmonthlyBudget => {
      res.render("monthlyBudget/allmonthlyBudget", { allmonthlyBudget });
    })
    .catch(error => {
      console.log("Error getting all monthlyBudget");
      console.log(error);
      res.send(error);
    });
});

monthlyBudgetRouter.get("/new", (req, res) => {
  res.render("monthlyBudget/createmonthlyBudget");
});

monthlyBudgetRouter.get("/:id/edit", (req, res) => {
  monthlyBudgetApi
    .getmonthlyBudgetById(req.params.id)
    .then(monthlyBudget => {
      res.render("monthlyBudget/editmonthlyBudget", { monthlyBudget });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

monthlyBudgetRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  monthlyBudgetApi
    .getmonthlyBudgetById(req.params.id)
    .then(singlemonthlyBudget => {
      res.render("monthlyBudget/singlemonthlyBudget", { singlemonthlyBudget });
    })
    .catch(error => {
      console.log("Error getting single monthlyBudget");
      console.log(error);
      res.send("Failed to retrieve monthlyBudget");
    });
});

monthlyBudgetRouter.post("/", (req, res) => {
  const newmonthlyBudget = req.body;

  monthlyBudgetApi
    .createmonthlyBudget(newmonthlyBudget)
    .then(() => {
      res.redirect("/monthlyBudget");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

monthlyBudgetRouter.put("/:id", (req, res) => {
  const monthlyBudgetId = req.params.id;
  const monthlyBudgetData = req.body;

  monthlyBudgetApi
    .updatemonthlyBudget(monthlyBudgetId, monthlyBudgetData)
    .then(() => {
      res.redirect(`/monthlyBudget/${monthlyBudgetId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

monthlyBudgetRouter.delete("/:id", (req, res) => {
  monthlyBudgetApi
    .deletemonthlyBudget(req.params.id)
    .then(() => {
      res.redirect("/monthlyBudget");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  monthlyBudgetRouter
};
