import React from 'react';
import { AiFillGithub } from "react-icons/ai";

function ButtonOne({githubLink, buttonText}) {
  return (
    <a href= {githubLink}
    target="_blank"
    rel="noreferrer"z
    ><button  
    className='btn-one project-link-btn'><span className="project-link-icon"><AiFillGithub /></span><span className="project-link-text">
      {buttonText}
      </span>
      </button>
    </a>    
  )
}

export default ButtonOne