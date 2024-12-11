import React from 'react'
import NewsArticle from '../Blog/DetailBlog/NewsArticle'
import PostCommentSection from '../Blog/DetailBlog/CommentSection'
import NewsPage from '../Blog/NewsPage'

function DetailBlog() {
  return (
    <div>
      <NewsArticle />
      <PostCommentSection />
      <NewsPage />
    </div>
  )
}

export default DetailBlog;