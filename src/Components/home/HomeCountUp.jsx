import React from 'react';
import'./HomeCountUp.css';
import CountUp from 'react-countup';


export const HomeCountUp = () => {
  return (
    <section className='countup'>
            <div className='container'>
            <div className='row '>
              <div className='col-3 lg-12 '>
              <CountUp start={0} end={20} duration={2} delay={0} style={{fontWeight:'bold',fontSize:'4em'}}/>
                <h6 style={{fontWeight:'bold'}}>Success Stories</h6>
              </div>
              <div className='col-3 lg-12'>
              <CountUp start={0} end={5} duration={2} delay={0} style={{fontWeight:'bold',fontSize:'4em'}}/>
                <h6 style={{fontWeight:'bold'}}>Courses</h6>
              </div>
              <div className='col-3 lg-12 '>
            
                <CountUp start={0} end={500} duration={2} delay={0} style={{fontWeight:'bold',fontSize:'4em'}}/>
              <h6 style={{fontWeight:'bold'}}>Happy Students</h6> 
              </div>
              <div className='col-3 lg-12'>
              <CountUp start={0} end={5} duration={2} delay={0} style={{fontWeight:'bold',fontSize:'4em'}}/>
                <h6 style={{fontWeight:'bold'}}>Years Experience</h6>
              </div>
            </div>
            </div>
          </section>
  )
}
