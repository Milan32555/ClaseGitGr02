const comitsRouter = require("express").Router();

comitsRouter.get("/", comitsRouter.getCommits);

module.exports = comitsRouter;
