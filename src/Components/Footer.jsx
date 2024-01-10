import React from 'react'
import './Footer.css';
import { FaAngleRight, FaFacebook, FaInstagram ,FaWhatsapp,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollTop from './ScrollTop';
export const Footer = () => {
  return (
    <div className='footer'> 
        <section className='footer-top'>
        <div className=' container row'>
            <div className='col-sm-3 lg-12 about '>
                <span> </span><lable className='lable'>ABOUT US</lable>
                
                <p style={{ fontSize:'15px', margin:'10px'}}> Sryn Learning is the india’s leading provider of digital 
                    marketing courses, helping professionals develop 
                    the skills they need to build successful careers and 
                    stay ahead of the curve.</p>
            </div>

            <div className='col-sm-3 lg-12 pages'>
                <span> </span>
                <lable>PAGES</lable>
                <Link to="/home" className='f-link'><FaAngleRight /> Home</Link>
                <Link to='/about' className='f-link'><FaAngleRight /> About Us</Link>
                <Link to='/contact' className='f-link'><FaAngleRight /> Contact Us</Link>
            </div>

            <div className='col-sm-3 lg-12 help'>
                <span> </span>
                <lable>HELP</lable>
                <Link className='f-link'><FaAngleRight /> Privacy Policy</Link>
                <Link className='f-link'><FaAngleRight /> Return and Refund Policy</Link>
                <Link className='f-link'><FaAngleRight /> Terms and Conditions</Link>
                <Link className='f-link'><FaAngleRight /> Shipping Policy</Link>
            </div>

            <div className='col-sm-3 lg-12 media'>
                <span> </span>
                <lable>SOCIAL MEDIA</lable>
                <p className='f-link'>
               <FaFacebook size={30} className='icon'/>
                <FaInstagram size={30} className='icon'/>
                <FaLinkedin size={30} className='icon'/>
                <FaWhatsapp size={30} className='icon' />
                </p>
            </div>
            {/* <ScrollTop /> */}
        </div>
        </section>
        <section className='footer-bottom'>
        <div>   
        Copyright © 2023 Loginrich Technology & Management Pvt Ltd. All Rights Reserved.
        </div>
        </section>
    </div>
  )
}
export default Footer;
