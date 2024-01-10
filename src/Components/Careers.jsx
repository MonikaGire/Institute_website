import React from 'react'
import './Career.css';

import Button from 'react-bootstrap/Button';

export const Careers = () => {
  return (
<section className='career'>
<div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',width:'100%'}}>
    <div className='title'>
      <h1>CAREER</h1>
    </div>
      </div>
      <div className='container content'>
          <h2 className=' p-3'>Hiring</h2>
      <div className='row mb-5'>
                <div className='card col-sm-4 lg-12 p-0 '>
                  <img src="courses.jpg" alt='career'/>
                  <div className='card-body'>
                    <h5 style={{fontWeight:'bold'}}>Human Resources Specialist</h5>
                    <Button type="submit" className='button m-3 py-2 p-3' style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',borderRadius:'30px', border:'none'}}>Send Resume </Button> 
                </div>
                </div>

                <div className='card col-sm-4 lg-12 p-0'>
                  <img src="courses.jpg" alt='career'/>
                  <div className='card-body'>
                    <h5 style={{fontWeight:'bold'}}>Digital Marketing Intern</h5>
                    <Button type="submit" className='button m-3 py-2 p-3' style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',borderRadius:'30px', border:'none'}}>Send Resume </Button> 
                  </div>
                </div>

                <div className='card col-sm-4 lg-12 p-0'>
                  <img src="courses.jpg" alt='career'/>
                  <div className='card-body'>
                    <h5 style={{fontWeight:'bold'}}>Social Media Intern</h5>
                    <Button type="submit" className='button m-3 py-2 p-3' style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',borderRadius:'30px', border:'none'}}>Send Resume </Button> 
                </div>
                </div> 
              </div>               
      </div>
</section>

  )
}
export default Careers;
