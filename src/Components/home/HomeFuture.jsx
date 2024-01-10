import React from 'react'
import './HomeFuture.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

export const HomeFuture = () => {
  return (
    <section className='home-future'>
                <div className='bgimage' style={{backgroundImage :'url("bg.jpg")', backgroundRepeat: 'no-repeat',backgroundAttachment:'fixed',height:'100vh', backgroundSize:'cover'}}>
                <div className='content'>
                  <h1>YOUR FUTURE STARTS HERE</h1>
                  <p>
                      Sryn is the india’s leading provider of digital marketing courses,
                      helping professionals develop the skills they need to build successful careers and 
                      stay ahead of the curve.
                  </p>
                  <div className='button'>
                  <Button type="submit" as={Link} to="/about" style={{backgroundColor:'cutom-color',backgroundColor:'white', border:'none',color:'black'}}>Learn More <FaArrowRight /></Button> 
                  </div>
                  </div>
                  </div>
                </section>
  )
}
