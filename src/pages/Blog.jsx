import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CardBlog from "../Blog/CardBlog";
import NewsPage from "../Blog/NewsPage";
import WebPage from "../Blog/WebPage"



function Blog() {
    return (
      <div>
        <CardBlog />
        <WebPage />
        <NewsPage />
      </div>
    );
  }

  export default Blog;