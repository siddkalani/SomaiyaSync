
// NewsFeed.jsx
import React, { useState, useEffect } from 'react';
import './NewsFeed.css';
import axios from 'axios';

function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    fetchNews();
    const userIsAdmin = true;
    setIsAdmin(userIsAdmin);
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:4200/api/news');
      setNewsFeed(response.data);
    } catch (error) {
      console.error('Error fetching news feed:', error);
    }
  };

  const handleAddNews = async () => {
    try {
      const response = await axios.post('http://localhost:4200/api/news', {
        title,
        content,
      });
      setNewsFeed([response.data, ...newsFeed]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      await axios.delete(`http://localhost:4200/api/news/${id}`);
      setNewsFeed(newsFeed.filter((news) => news._id !== id));
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [newsFeed]);

  return (
    <div className="newsfeed-container">
      <div className="container">
        <h1 className="heading">somaiyaSync News-Feed</h1>
        {isAdmin && ( // Render the input fields only if the user is an admin
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="add-button" onClick={handleAddNews}>
              Add News
            </button>
          </div>
        )}
        <div className="news-container">
          {newsFeed.map((news) => (
            <div key={news._id} className="news-card">
              <h3>{news.title}</h3>
              <p>{news.content}</p>
              {isAdmin && ( // Render the Delete button only if the user is an admin
                <button className="delete-button" onClick={() => handleDeleteNews(news._id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;

