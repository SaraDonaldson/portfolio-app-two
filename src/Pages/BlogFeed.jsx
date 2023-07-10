import React from 'react';
import BlogFeedCard from '../Components/Blog/BlogFeedCard';
import './blogFeed.css';
import codePenBall from '../Images/codePenBall.png'

function BlogFeed() {

  let CssBoxShadows = {
          title: "CSS: Art with a single element using only box shadows",
          subtitle: "How far can I go?",
          mainimage: codePenBall,
          mainimagealt: "preview of a clear pink ball made with CSS",
          paraOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum, excepturi sed pariatur repellendus eos aperiam id eius officia veniam voluptatum iste, laborecorrupti aut quas voluptates voluptate. Ab, labore."

  }


  return (
    <div className='app-content blog-feed'>
      
      <div className='blog-feed-main-container'>
      <BlogFeedCard
      blogContent={CssBoxShadows}
      />
      </div>
    </div>
  )
}

export default BlogFeed