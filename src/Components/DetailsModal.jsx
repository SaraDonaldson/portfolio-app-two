import React from 'react';
import './detailsModal.css'
import ProjectDetails from './ProjectDetails';
import { FaArrowRight, FaArrowLeft, FaCross } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';
function DetailsModal({
    projectDataArray,
    activeDataIndex,
    setActiveDataIndex,
    trigger,
    setTrigger,
}) {
    


    function setNextProject(click){
        click.stopPropagation()
        if(projectDataArray.length -1 === activeDataIndex){
            setActiveDataIndex(0)
        } else {
            setActiveDataIndex(activeDataIndex+1)
        }
    }
    
    function setPreviousProject(click){
        click.stopPropagation()
        if(activeDataIndex === 0){
            setActiveDataIndex(projectDataArray.length -1)
        } else {
            setActiveDataIndex(activeDataIndex-1)
        }
    }
    return (
    <div 
    className='overlay'
    onClick={()=> setTrigger(false)}
    > 
         <button className='exit-modal-button'><AiFillCloseCircle/></button>

        <div className='details-modal-outer' onClick={(e)=> {e.stopPropagation()}}>
            <div className='details-modal-inner'>
            <ProjectDetails
            projectInfo={projectDataArray[activeDataIndex]}/>
            </div>


        </div>


        <div  className='direction-button next-project-button' onClick={(e)=> setNextProject(e)}>
       <FaArrowRight/>
            
        </div>
       <div className='direction-button previous-project-button'onClick={(e)=> setPreviousProject(e)}>
        
       <FaArrowLeft/>
       </div>

    </div>
  );
}

export default DetailsModal