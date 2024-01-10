import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';

import { HomeTraning } from './HomeTraning';
import { HomeCourses } from './HomeCourses';
import { HomeLearning } from './HomeLearning';
import { HomeChooseUs } from './HomeChooseUs';
import { HomeCountUp } from './HomeCountUp';
import { HomeTestmonials } from './HomeTestmonials';
import { HomeBlog } from './HomeBlog';
import { HomeFuture } from './HomeFuture';

export const Home = () => {
 
  return (
    <div>
      
        <section className='home-bg'>
          {/* <div style={{backgroundColor:'gray',height:'500px'}}> */}
         <div className='home-img'style={{backgroundImage:'url("home.png")'}} > 
            {/* <Button  style={{backgroundColor:'cutom-color',backgroundColor:'#1a237e',border:'none'}}>GET STARTED</Button> */}
          </div>
          </section>
          {/* traning-future section */}
              <HomeTraning />
          {/* Courses */}
            <HomeCourses />
          {/* Lerning section */}
            <HomeLearning />
          {/* Why choose us section */}
            <HomeChooseUs />
          {/* Countup */}
            <HomeCountUp />
          {/* OUR STUDENTS TESTIMONIALS section */}
             <HomeTestmonials />
          {/*Blog section  */}
              <HomeBlog />  
          {/* home Future */}
          <HomeFuture />
     </div>
   )
}
export default Home;
