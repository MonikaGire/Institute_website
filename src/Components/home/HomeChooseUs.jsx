import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import './HomeChooseUs.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'


export const HomeChooseUs = () => {

      const [show1, SetShow1] = useState(false);
      const [show2, SetShow2] = useState(false);
      const [show3, SetShow3] = useState(false);
      const [show4, SetShow4] = useState(false);
  
  
  return (
    <section className='choose-us ' style={{backgroundColor:'#f0d8df'}}>
            <div className='container' >
            <h5>Why Choose Us?</h5><hr className='underline'/>
            <p>
              If You Are Interested In Learning Digital Marketing Or Launching A Career In This Field, 
              We Invite You To Explore Our Courses And Learn More 
              About How Syrn Learning Can Help You Achieve Your Goals.</p>
            <div className='row'>
              <div className='col-sm-6 lg-12'>
              <Accordion >
              <div className=" mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header> Comprehensive and up-to-date training</Accordion.Header>
              <Accordion.Body>
                We offer our students access to our online community forum, where they can ask questions and get help from other students and our instructors.
              </Accordion.Body>
              </Accordion.Item>
               
            </div>
            <div className=" mt-4">
              <Accordion.Item eventKey="1">
                <Accordion.Header> Comprehensive and up-to-date training</Accordion.Header>
              <Accordion.Body>
                We offer our students access to our online community forum, where they can ask questions and get help from other students and our instructors.
              </Accordion.Body>
              </Accordion.Item>
               
            </div>
            <div className=" mt-4">
              <Accordion.Item eventKey="2">
                <Accordion.Header className='heading'> Comprehensive and up-to-date training</Accordion.Header>
              <Accordion.Body>
                We offer our students access to our online community forum, where they can ask questions and get help from other students and our instructors.
              </Accordion.Body>
              </Accordion.Item>
               
            </div>
            <div className=" mt-4">
              <Accordion.Item eventKey="">
                <Accordion.Header style={{color:'#eb144c'}}> Comprehensive and up-to-date training</Accordion.Header>
              <Accordion.Body>
                We offer our students access to our online community forum, where they can ask questions and get help from other students and our instructors.
              </Accordion.Body>
              </Accordion.Item>
               
            </div>
            
          
            </Accordion>
            </div>
              <div className='col-sm-6 lg-12'>
              <img src='choose-us.jpg' style={{width:'100%'}}></img>
              </div>
            </div>
            </div>

            
          </section>

  )
}
