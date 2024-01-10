import React from 'react';
import './HomeTestmonials.css'
import Carousel from "react-bootstrap/Carousel";
import { Card } from 'react-bootstrap';

export const HomeTestmonials = () => {
  return (
    <section className='testmonials'>
                  <div className='container'>
                    <h5>OUR STUDENTS TESTIMONIALS</h5>
                    <h1>Students Say’s About</h1>

                    <Carousel>
                      <Carousel.Item>
                      <div className='bg' style={{backgroundColor:'#DB7093',height:'410px'}}>
                      <Carousel.Caption>
                        <img src='review.jpg' style={{size:'2px',borderRadius:'70%',margin:'10px'}}/><br />
                        <label style={{fontSize:'25px',fontWeight:'bold',fontStyle:'italic'}}>Priya Patil</label>
                        <Card >
                          <p>
                              Training was excellent with good interaction. Knowledge sharing is good. 
                              Recording facility is excellent for revising. Course was practically and informative. Manoj Sir is enthusiastic and really aware of what he is explaining. 
                              The course helped to build confidence, Valuable experiences and learning.
                              </p>
                          </Card>
                        </Carousel.Caption>                    
      
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                      <div className='bg' style={{backgroundColor:'#DB7093',height:'410px'}}>
                        <Carousel.Caption>
                        <img src='review.jpg' style={{size:'2px',borderRadius:'70%',margin:'10px'}}/><br />
                        <label style={{fontSize:'25px',fontWeight:'bold',fontStyle:'italic'}}>Priya Patil</label>
                        <Card>
                          <p>
                              Training was excellent with good interaction. Knowledge sharing is good. 
                              Recording facility is excellent for revising. Course was practically and informative. Manoj Sir is enthusiastic and really aware of what he is explaining. 
                              The course helped to build confidence, Valuable experiences and learning.
                              </p>
                          </Card>
                        </Carousel.Caption>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className='bg' style={{backgroundColor:'#DB7093',height:'410px'}}>
                        <Carousel.Caption>
                        <img src='review.jpg' style={{size:'2px',borderRadius:'70%',margin:'10px'}}/><br />
                        <label style={{fontSize:'25px',fontWeight:'bold',fontStyle:'italic'}}>Priya Patil</label>
                          <Card>
                          <p>
                              Training was excellent with good interaction. Knowledge sharing is good. 
                              Recording facility is excellent for revising. Course was practically and informative. Manoj Sir is enthusiastic and really aware of what he is explaining. 
                              The course helped to build confidence, Valuable experiences and learning.
                              </p>
                          </Card>
                        </Carousel.Caption></div>
                      </Carousel.Item>
                  </Carousel>
                  </div>
                </section>

  )
}
