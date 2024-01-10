import React from 'react';
import './HomeBlog.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
export const HomeBlog = () => {
  return (
    <section className='container blog py-5'>
                  <div>
                    <h1>Blogs and News From Us</h1><hr />
               
                <div className='row'>
                <div className='card col-sm-4 lg-12 m-2'>
                  <img src="courses.jpg" alt='courses'/>
                  <label style={{fontSize:'12px'}}>DIGITAL MARKETING</label>
                <h3 style={{fontWeight:'bold'}}>The Digital Marketing Revolution</h3>
               
                <Button type="submit"  style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none'}}>Read More <FaArrowRight /></Button> 
                </div>

                <div className='card col-sm-4 lg-12 m-2'>
                  <img src="courses.jpg" alt='courses'/>
                  <label style={{fontSize:'12px'}}>SEO</label>
                <h3 style={{fontWeight:'bold'}}>SEO Updates For 2023 What You Need To Know</h3>
               
                <Button type="submit"  style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none'}}>Read More <FaArrowRight /></Button> 
                </div>

                <div className='card col-sm-4 lg-12 m-2'>
                  <img src="courses.jpg" alt='courses'/>
                  <label style={{fontSize:'12px'}}>SOCIAL MEDIA MARKETING</label>
                <h3 style={{fontWeight:'bold'}}>Facebook Insights: What It Is And How To Use It</h3>
               
                <Button type="submit"  style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none'}}>Read More <FaArrowRight /></Button> 
                </div>
                    
              </div>                   
          </div>
            </section>
  )
}
