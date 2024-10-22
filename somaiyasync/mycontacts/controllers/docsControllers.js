const asyncHandler = require("express-async-handler");
const Documents = require("../models/documentModel");

//@desc Get contacts
//@route  GET /api/news
//@access public
const getDocs = asyncHandler(async (req, res) => {
  try {
    const docs = await Documents.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//@route  POST /api/news
//@access public
const createDocs = asyncHandler(async (req, res) => {
  const { url, branch, sem , topic } = req.body;
  try {
    const docItem = new Documents({ url, branch, sem , topic });
    const savedDocItem = await docItem.save();
    res.status(201).json(savedDocItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@route  DELETE /api/news/:id
//@access public
const deleteDocs = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deleteDocsItem = await Documents.findByIdAndDelete(id);
    if (!deleteDocsItem) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json({ message: "News Item delted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getDocs,
  createDocs,
  deleteDocs,
};
