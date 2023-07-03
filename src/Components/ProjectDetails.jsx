import React, { useEffect } from 'react'
import ButtonTwo from './ButtonTwo'
import ButtonOne from './ButtonOne'

function ProjectDetails({projectInfo}) {

    useEffect(() => {
      console.log('change',projectInfo)

    }, [projectInfo])
    
  return (
    <div className='project-details-container'>
        <div className="project-details-banner"><img src={projectInfo.bannerImage} alt="an example view of the project" /></div>
        <div className='project-details-intro'>
            <h2 className='project-details-title'>{projectInfo.title}</h2>
            <p className='project-details-intro-text'>{projectInfo.introText}</p>
            {/* <div className='icons-section'>Icons</div> */}
        </div>
        <div className='project-btns-container'>
            
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
  )
}

export default ProjectDetails