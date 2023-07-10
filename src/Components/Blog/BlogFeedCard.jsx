import React from 'react'

function BlogFeedCard({blogContent}) {
  return (
    <div className='blog-feed-card'> 
    
        <h1 className='blog-content-title'>{ blogContent.title}</h1>
       


    </div>
  )
}

export default BlogFeedCard