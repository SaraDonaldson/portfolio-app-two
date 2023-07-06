import React from 'react';
import './footer.css'
import { BsGithub } from "react-icons/bs";
import { AiFillCodepenCircle, AiOutlineCopyrightCircle } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>

            <div className='footer-icon-links-container'>
                <a  href='https://github.com/SaraDonaldson'
                    target="_blank"
                    rel="noreferrer"z
                    className='footer-icon-links' > 
                    <BsGithub/></a>

                <a href = 'https://www.linkedin.com/in/sara-donaldson-developer/'
                    target="_blank"
                    rel="noreferrer"z
                    className='footer-icon-links'
                    > 
                <BiLogoLinkedinSquare/> </a>

                <p Link='/contact'
                    rel="noreferrer"z
                    className='footer-icon-links'
                    > 
                    <MdOutlineEmail/> </p>

                <a href= 'https://codepen.io/SaraDonaldson'
                    target="_blank"
                    rel="noreferrer"z
                    className='footer-icon-links'
                    > 
                <AiFillCodepenCircle/></a>
                    
            </div>

           


         </div>

         <div className='footer-copyright'>
                <p className='footer-copyright-message'>
                <AiOutlineCopyrightCircle/> Sara Donaldson 2023</p>
        </div>



    </div>
  )
}

export default Footer