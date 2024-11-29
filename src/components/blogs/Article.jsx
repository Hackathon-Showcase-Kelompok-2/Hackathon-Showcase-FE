import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src={article.thumbnail} alt={article.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-2">{article.date}</p>
      <p className="text-gray-700 mb-4">{article.description}</p>
      <a href={article.url} className="text-blue-500 hover:underline">Read More</a>
    </div>
  );
};

export default Article;
