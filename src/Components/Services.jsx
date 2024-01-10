import React from 'react';
import './Services.css';
import { Button } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

export const Services = () => {
  return (
    <section className='service '>
      <div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',backgroundAttachment:'fixed',width:'100%'}}>
    <div className='title'>
      <h1>All Services</h1>
    </div>
      </div>
      <div className='container-fluid p-5'>
      <div className='row '>
      <div className='col-sm-6 p-4'>
          <h2>Web Development</h2>
          <p>We are a full-service web development company that can help you create a website that meets your specific needs and goals. We have a team of experienced and certified web developers who can create a custom website design, develop an e-commerce website, or provide ongoing website maintenance. We also offer a variety of other web development services, such as content management system (CMS) development, search engine optimization (SEO), and web hosting and security. Whether you are a small business owner or a large enterprise,
             we can help you create a website that will help you achieve your business goals.</p>
             <Button type="submit"  style={{  backgroundColor:'cutom-color',backgroundColor:'#e23175',borderRadius:'15px', border:'none',fontWeight:'bold'}}><FaGraduationCap size={25}/> GET QUOTE</Button> 
                  
        </div>
        <div className='col-sm-6 p-4 '>
                <img src="courses.jpg" className='img-thumbnail' alt='courses'/>
        </div>
      </div>

      <div className='row'>
      <div className='col-sm-6 p-4'>
      <img src="courses.jpg" className='img-thumbnail' alt='courses'/>
        </div>
        <div className='col-sm-6 p-4' >
        <h2>Web Development</h2>
          <p>We are a full-service web development company that can help you create a website that meets your specific needs and goals. We have a team of experienced and certified web developers who can create a custom website design, develop an e-commerce website, or provide ongoing website maintenance. We also offer a variety of other web development services, such as content management system (CMS) development, search engine optimization (SEO), and web hosting and security. Whether you are a small business owner or a large enterprise,
             we can help you create a website that will help you achieve your business goals.</p>
             <Button type="submit"  style={{  backgroundColor:'cutom-color',backgroundColor:'#e23175',borderRadius:'15px', border:'none',fontWeight:'bold'}}><FaGraduationCap size={25}/> GET QUOTE</Button> 

        </div>
      </div>

      <div className='row'>
      <div className='col-sm-6 p-4'>
          <h2>Web Development</h2>
          <p>We are a full-service web development company that can help you create a website that meets your specific needs and goals. We have a team of experienced and certified web developers who can create a custom website design, develop an e-commerce website, or provide ongoing website maintenance. We also offer a variety of other web development services, such as content management system (CMS) development, search engine optimization (SEO), and web hosting and security. Whether you are a small business owner or a large enterprise,
             we can help you create a website that will help you achieve your business goals.</p>
             <Button type="submit"  style={{  backgroundColor:'cutom-color',backgroundColor:'#e23175',borderRadius:'15px', border:'none',fontWeight:'bold'}}><FaGraduationCap size={25}/> GET QUOTE</Button> 

        </div>
        <div className='col-sm-6 p-4'>
            <img src="courses.jpg" className='img-thumbnail' alt='courses'/>
        </div>
      </div> 
      </div>
    </section>
  )
}
export default Services;
