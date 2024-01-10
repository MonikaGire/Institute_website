import React from 'react';
import './HomeLearning.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaGraduationCap,FaChalkboardTeacher, FaInternetExplorer, FaHeadphones, FaRegComments} from 'react-icons/fa'


export const HomeLearning = () => {
  return (
    <section className=' learning py-5'>
    <div className='row'>
      <div className='col-sm-6 lg-12 part1'>
      <p style={{color:'white',fontWeight:'bold'}}>Loginrich Learning</p>
        <h6 style={{color:'white',fontWeight:'bold',fontSize:'40px'}}>Start your Learning Journey Today !</h6>
         <p style={{fontSize:'18px'}}>Digital Courses With Experienced Mentors</p>
         <Button type="submit" as={Link} to="/enrollform"  style={{backgroundColor:'cutom-color',backgroundColor:'black', border:'none',borderRadius:'30px'}}>
         <FaGraduationCap  size={30}/>View More
         </Button>                 

      </div>
      <div className='col-sm-6 lg-12  part2'>
        <div className='row'>
          <div className='card col-sm-6 lg-12 p-3 '>
          
            <div className='row'>
              <div className='col-3 '>
              <FaChalkboardTeacher  className='icon' color='#eb144c' size={40}  />
              </div>
              <div className='col-9'>
              <strong>Flexible classes</strong>
              <p>You pick the schedule.</p>
              </div>
            </div>
        
        </div>
        <div className='card col-sm-6 lg-12 p-3'>
        <div className='row'>
              <div className='col-3'>
              <FaInternetExplorer  className='icon' color='#eb144c' size={40}  />
              </div>
              <div className='col-9 '>
              <strong>Online mode</strong>
              <p>Live classes.</p>
              </div>
            </div>
        </div>
        </div>
        <div className='row'>
        <div className='card col-sm-6 lg-12 p-3'>
        <div className='row'>
              <div className='col-4'>
              <FaRegComments  className='icon' color='#eb144c' size={40}  />
              </div>
              <div className='col-8 p-2'>
              <strong>Solve Queries</strong>
              <p>Clear doubt classes.</p>
              </div>
            </div>
        </div>
        <div className='card col-sm-6 lg-12 p-3'>
        <div className='row'>
              <div className='col-4'>
              <FaHeadphones  className='icon' color='#eb144c' size={40}  />
              </div>
              <div className='col-8 p-2'>
              <strong>Educator help</strong>
              <p>Always get answers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
