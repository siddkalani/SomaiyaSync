import React from 'react'

const NewsFeed = () => {
  return (
    <div>
      <nav>
    <div className="main-nav container flex">
        <a href="#" onclick="reload()" className="logo">
            <img src='assets/logo.png'/>
        </a>
        <div className="nav-links">
            <ul className="flex">
                <li className="hover-link nav-item" id="Technology" onclick="onNavItemClick('Technology')">Technology</li>
                <li className="hover-link nav-item" id="Gaming" onclick="onNavItemClick('Gaming')">Gaming</li>
                <li className="hover-link nav-item" id="AI" onclick="onNavItemClick('AI')">AI</li>
                <li className="hover-link nav-item" id="placements" onclick="onNavItemClick('placements')">Placements</li>
                <li className="hover-link nav-item" id="internships" onclick="onNavItemClick('internships')">Interniships</li>
            </ul>
        </div>
        <div class="search-bar flex">
            <input type="text" className="news-input" id="search-text" placeholder="e.g. Science"/>
            <button className="search-button" id="search-button">Search</button>
        </div>
    </div>
</nav>


<main>
    <div className="cards-container container flex" id="cards-container">
        
    </div>
</main>

<template id="template-news-card">
    <div className="card">
        <div className="card-header">
            <img src="https://via.placeholder.com/400x200" alt="News image" id="news-img"/>
        </div>
        <div className="card-content">
            <h3 id="news-title">This is the title</h3>
            <h6 className="news-source" id="news-source">End gadget 26/08/2023</h6>
            <p className="news-desc" id="news-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus repellendus libero at eum sint iusto unde, ut ea. Perspiciatis quo voluptatibus est pariatur neque ratione recusandae nisi hic, mollitia perferendis!</p>
        </div>
    </div>
</template>


<script src="script.js"></script>
</div>
  )
}

export default NewsFeed