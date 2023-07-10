import React from 'react'
import BlogFeedCard from '../Components/Blog/BlogFeedCard'

function BlogFeed() {

  let CssBoxShadows = {
          title: "CSS: Art with a single element using only box shadows"

  }


  return (
    <div className='app-content blog-feed'>
      
      
      <BlogFeedCard
      blogContent={CssBoxShadows}
      />



    </div>
  )
}

export default BlogFeed