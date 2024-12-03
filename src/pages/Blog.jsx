import React from "react";
import Articles from '../blogs/Articles';
import Sidebar from "../blogs/Sidebar";


function Blog() {
    return (
      <div>
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row"> <Sidebar /> <Articles /> </div>
        {/* Konten lainnya */}
      </div>
    );
  }

  export default Blog;