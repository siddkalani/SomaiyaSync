const asyncHandler = require("express-async-handler");
const NewsFeed = require("../models/newsModel");

//@desc Get contacts
//@route  GET /api/news
//@access public
const getNews = asyncHandler(async (req, res) => {
  try {
    const news = await NewsFeed.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//@route  POST /api/news
//@access public
const createNews = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  try {
    const newsItem = new NewsFeed({ title, content });
    const savedNewsItem = await newsItem.save();
    res.status(201).json(savedNewsItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@route  DELETE /api/news/:id
//@access public
const deleteNews = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deleteNewsItem = await NewsFeed.findByIdAndDelete(id);
    if (!deleteNewsItem) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json({ message: "News Item delted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getNews,
  createNews,
  deleteNews,
};
