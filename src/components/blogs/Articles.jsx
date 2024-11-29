import React, { useEffect, useState } from 'react';
import Article from './Article';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://api.example.com/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="w-full md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
