const express = require("express");
const {
  getNews,
  createNews,
  deleteNews,
} = require("../controllers/newsController");
// const { getDocs, createDocs } = require("../controllers/docsControllers");
const router = express.Router();

router.get("/", getDocs).post("/", createDocs);
// router.delete("/:id", deleteNews);

module.exports = router;
