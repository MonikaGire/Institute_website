import React from 'react'
import './HomeCourses.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaRegFile,FaRegUser } from 'react-icons/fa'
import { GiNetworkBars } from 'react-icons/gi'

export const HomeCourses = () => {
  return (
    <section className='container courses py-5 '>
            <div >
              <h5 className='mt-5'>Browse Courses</h5>
              <h1>Populares Courses to Learn</h1>


              <div className='row'>
                <div className='card col-sm-4 lg-12 m-4'>
                  <img src="courses.jpg" alt='courses'/>
                <h6>Advance Digital Marketing Course</h6>
                
                <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /><br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button> 
                </div>

                <div className='card col-sm-4 lg-12 '>
                  <img src="courses.jpg" alt='courses'/>
                  <h6>Social Media Marketing Course</h6>
                  <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /> <br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button> 
                </div>

                <div className='card col-sm-4 lg-12 '>
                  <img src="courses.jpg" alt='courses'/>
                <h6>Website Development Course</h6>
                <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /> <br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button>                 
                </div>              
              </div>

              <div className='row '>
                <div className='card col-sm-4 lg-12 '>
                  <img src="courses.jpg" alt='courses'/>
                <h6>Google Marketing (PPC) Course</h6>
                
                <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /><br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button> 
                </div>

                <div className='card col-sm-4 lg-12 '>
                  <img src="courses.jpg" alt='courses'/>
                  <h6>Graphics & Video Editing Course</h6>
                  <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /><br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button> 
                </div>

                <div className='card col-sm-4 lg-12'>
                  <img src="courses.jpg" alt='courses'/>
                <h6>Website Development Course</h6>
                <div className='row mt-2' style={{color:'gray'}}>
                  <div className='col-3'>
                  <p style={{textAlign:'center'}}> <FaRegFile /> Topic</p>
                  </div>
                  <div className='col-4'>
                  <p style={{textAlign:'center'}}> <FaRegUser /><br /> Student</p>
                  </div>
                  <div className='col-5'>
                  <p style={{textAlign:'center'}}> <GiNetworkBars /> Intermediate</p>
                  </div>
                </div>
                <hr />
                <Button type="submit" as={Link} to="/digitalmarketing" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'20px'}}>View More</Button>                 
                </div>             
              </div>
            </div>
          </section>
  )
}
