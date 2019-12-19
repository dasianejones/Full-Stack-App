const express = require("express");

const issuesApi = require("../models/issues.js");

const issuesRouter = express.Router();

issuesRouter.get("/", (req, res) => {
  issuesApi
    .getAllIssues()
    .then(allIssues => {
      res.render("issues/allIssues", { allIssues });
    })
    .catch(error => {
      console.log("Error getting all issues");
      console.log(error);
      res.send(error);
    });
});

issuesRouter.get("/new", (req, res) => {
  res.render("issues/createIssues");
});

issuesRouter.get("/:id/edit", (req, res) => {
  issuesApi
    .getIssuesById(req.params.id)
    .then(issues => {
      res.render("issues/editIssues", { issues });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

issuesRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  issuesApi
    .getIssuesById(req.params.id)
    .then(singleIssues => {
      res.render("issues/singleIssues", { singleIssues });
    })
    .catch(error => {
      console.log("Error getting single issues");
      console.log(error);
      res.send("Failed to retrieve issues");
    });
});

issuesRouter.post("/", (req, res) => {
  const newIssues = req.body;

  issuesApi
    .createIssues(newIssues)
    .then(() => {
      res.redirect("/issues");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

issuesRouter.put("/:id", (req, res) => {
  const issuesId = req.params.id;
  const issuesData = req.body;

  issuesApi
    .updateIssues(issuesId, issuesData)
    .then(() => {
      res.redirect(`/issues/${issuesId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

issuesRouter.delete("/:id", (req, res) => {
  issuesApi
    .deleteIssues(req.params.id)
    .then(() => {
      res.redirect("/issues");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  issuesRouter
};
