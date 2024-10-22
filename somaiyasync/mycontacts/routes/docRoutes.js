const express = require("express");
const { getDocs, createDocs } = require("../controllers/docsControllers");
const router = express.Router();

router.get("/", getDocs).post("/", createDocs);
// router.delete("/:id", deleteNews);

module.exports = router;
