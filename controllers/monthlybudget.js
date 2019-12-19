const express = require("express");

const monthlyBudgetApi = require("../models/monthlybudget.js");

const monthlyBudgetRouter = express.Router();

monthlyBudgetRouter.get("/", (req, res) => {
  monthlyBudgetApi
    .getAllMonthlyBudget()
    .then(allMonthlyBudget => {
      console.log(allMonthlyBudget);
      res.render("monthlyBudget/allmonthlyBudget", { allMonthlyBudget });
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
    .getMonthlyBudgetById(req.params.id)
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
    .getMonthlyBudgetById(req.params.id)
    .then(singleMonthlyBudget => {
      res.render("monthlyBudget/singlemonthlyBudget", { singleMonthlyBudget });
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
    .createMonthlyBudget(newmonthlyBudget)
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
    .updateMonthlyBudget(monthlyBudgetId, monthlyBudgetData)
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
    .deleteMonthlyBudget(req.params.id)
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
