import React from 'react';
import './projectsSummaryCard.css'

function ProjectsSummaryCard({
  projectName,
   projectImage,
   handleProjectModal, modalContentIndex}) {
   

  return (
    <div onClick={()=> handleProjectModal(modalContentIndex)}className='sum-card-container'>
        <div className='project-sum-card-img-cont'>
        <img
        className='project-sum-card-img'
        src = {projectImage}
        alt = {`preview of ${projectName} website`}
        />

        </div>

    <div className='project-sum-card-label'>
        <h3 className='project-sum-card-label-text'>{projectName}</h3>
    </div>


    </div>
  )
}

export default ProjectsSummaryCard