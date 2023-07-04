import React, { useEffect } from 'react'
import ButtonTwo from './ButtonTwo'
import ButtonOne from './ButtonOne'

function ProjectDetails({projectInfo}) {

    useEffect(() => {
      console.log('change',projectInfo)

    }, [projectInfo])
    
  return (
    <div className='project-details-container'>
       
        <div className="project-details-banner">
          <img 
          className='project-details-banner-image'
          src={projectInfo.bannerImage} 
          alt="an example view of the project" />
          </div>

          <h2 className='project-details-title'>{projectInfo.title}</h2>




      
        <div className='project-details-main-content'>
            <div className='project-details-intro'>
            <p className='project-details-intro-text project-details-intro'>{projectInfo.introText}</p>
            </div>
       


        
            <div className='project-btns-container'>
               <div className='project-btns-bg'>
                <ButtonOne
                buttonText= {`${projectInfo.title} code`}
                githubLink ={projectInfo.githubLinkOne}
                />
        
                <ButtonTwo
                buttonText= {`${projectInfo.title} demo`}
                demoLink= {projectInfo.demoLinkOne}
                />
                </div>
            </div>
          </div>
      

    </div>
  )
}

export default ProjectDetails