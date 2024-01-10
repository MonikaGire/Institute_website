import React from 'react'
import './About.css';
import { FaUserGraduate,FaHeadphones} from 'react-icons/fa';
import { FiMonitor}from 'react-icons/fi'
import { HomeCountUp } from './home/HomeCountUp';
import { HomeFuture } from './home/HomeFuture';

export const About = () => {
  return (
    <section className='about'>
      <div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',backgroundAttachment:'fixed',width:'100%'}}>
    <div className='title'>
      <h1>ABOUT US</h1>
    </div>
      </div>

      <div className='row p-5 mb-0'>
        <div className='col-sm-6'>
          <h1>SRYN LEARNING</h1>
          <p>Syrn Learning Is An Online Digital Marketing Course Provider That Helps Students Learn The Skills They Need To Succeed In The Digital Marketing Industry. <br />
            We Offer A Wide Range Of Courses, Including Social Media Marketing, Search Engine Optimization (SEO), Pay-Per-Click (PPC) Advertising, And Email Marketing.<br /> 
            Our Courses Are Taught By Experienced Digital Marketing Professionals Who Are Passionate About Teaching Students The Skills They Need To Succeed.</p>
        </div>
        <div className='col-sm-6'>
        <img src="courses.jpg" alt='courses'style={{width:'100%',backgroundSize:'cover'}}/>
      </div>
      </div>
      <h1 className='m'>Our Traning Feature</h1>
      <div className='container'>
      <div className='row '>
                <div className='col-sm-4 lg-12 card'>
                    <FiMonitor size={80}className='about-icon'/>
                    <div className=''>
                      <h6 className='mt-4'><b>Learn At Your Own Pace</b></h6>
                      <p>Enjoy Learning From Home Without A Set Schedule And With An Easy-To-Follow Method.</p>
                    </div>
                </div>
                <div className='col-sm-4 lg-12 card'>
                    <FaUserGraduate size={80}className='about-icon' />
                    <div className=''>
                      <h6 className='mt-4'><b>Learn By Professionals</b></h6>
                      <p>Each Expert Teaches What They Do Best, With Clear Guidelines, And Insight In Every Lesson.</p>
                    </div>
                </div>
                <div className='col-sm-4 lg-12 card'>
                    <FaHeadphones  size={80}className='about-icon' />
                    <div className=''>
                      <h6 className='mt-4'><b>Professionally Produced</b></h6>
                      <p>Alumity Curates Its Teacher Roster And Produce Every Course In-House For High-Quality Experience.</p>
                    </div>
                </div>
            </div>
        </div>
        <HomeCountUp />
        <HomeFuture />
    </section>
  )
}
export default About;
