import { React, useState } from 'react';
import './blogFeedCard.css';

function BlogFeedCard({blogContent}) {
    let [blogCardBody, setBlogCardBody] = useState("")

    // function blogCardLimit(){


    // }



  return (
    <div className='blog-feed-card'> 

      

        <div className='blog-card-title-section'>
        <h1 className='blog-card-title blog-card-white-space'>{ blogContent.title}</h1>
        </div>

        

        <div className='blog-card-body-container'>
       
            <h2 className= 'blog-card-subtitle blog-card-white-space'> {blogContent.subtitle}</h2>
            <div className='blog-card-image-container'>
                <img className='blog-card-image'  src= {blogContent.mainimage} alt='' />
             </div>
            <div className='blog-card-body'>
                <p className='blog-card-intro-text blog-card-white-space'>
                    {blogContent.paraOne}
                </p>
            </div>

        </div>

    </div>
  )
}

export default BlogFeedCard