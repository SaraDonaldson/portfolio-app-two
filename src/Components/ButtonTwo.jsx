import React from 'react'

function ButtonTwo({demoLink, buttonText}) {
  return (
    <a href= {demoLink}
    target="_blank"
    rel="noreferrer"z
    ><button  
    className='btn-two project-link-btn'>{buttonText}</button>
    </a>  
  )
}

export default ButtonTwo