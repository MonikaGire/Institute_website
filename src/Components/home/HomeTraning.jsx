import React from 'react'
import './HomeTraning.css';
import {FaMedal, FaUserGraduate } from 'react-icons/fa'
import {BiSmile, BiStar} from 'react-icons/bi';
import{HiOutlineThumbUp} from 'react-icons/hi';
export const HomeTraning = () => {
  return (
    <section className='container traning-future '>
            <h1>Our Traning Feature</h1>
           <div className='underline'> <FaUserGraduate className='icon mb-5' /></div>
         
                <div className='row content'>
                <div className='col-sm-3 lg-12 card'>
                    <BiSmile size={50}className='future-icon'/>
                    <div className=''>
                      <h6 className='mt-4'><b>Learn At Your Own Pace</b></h6>
                      <p>Enjoy Learning From Home Without A Set Schedule And With An Easy-To-Follow Method.</p>
                    </div>
                </div>
                <div className='col-sm-3 lg-12 card'>
                    <HiOutlineThumbUp size={50}className='future-icon' />
                    <div className=''>
                      <h6 className='mt-4'><b>Learn By Professionals</b></h6>
                      <p>Each Expert Teaches What They Do Best, With Clear Guidelines, And Insight In Every Lesson.</p>
                    </div>
                </div>
                <div className='col-sm-3 lg-12 card'>
                    <BiStar size={50}className='future-icon' />
                    <div className=''>
                      <h6 className='mt-4'><b>Professionally Produced</b></h6>
                      <p>Alumity Curates Its Teacher Roster And Produce Every Course In-House For High-Quality Experience.</p>
                    </div>
                </div>
                <div className='col-sm-3 lg-12 card'>
                    <FaMedal size={50}className='future-icon' />
                    <div className=''>
                      <h6 className='mt-4'><b>Earn Certificate</b></h6>
                      <p>Get Certificate With Every Course You Complete And Share It With Your Employer.</p>
                    </div>
                </div>
            </div>
          </section>
  )
}
