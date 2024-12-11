import  React from 'react'
import DetailThread from '../thread/DetailThread'
import CommentSection from '../thread/CommentSection'

function Thread() {
  return (
    <div className='bg-gray-50 flex items-center justify-center w-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
        <DetailThread />
        <CommentSection />
      </div>
    </div>
  )
}

export default Thread;