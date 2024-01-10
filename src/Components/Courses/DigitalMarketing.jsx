import React,{useState} from 'react'
import './DigitalMarketing.css'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const DigitalMarketing = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, phone, course } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Phone: ', phone);
    console.log('Course: ', course);
  };
  return (
    <section className='digtalmarketing'>
       <div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',backgroundAttachment:'fixed',width:'100%'}}>
        <div className='title'>
          <h1>ADVANCE DIGITAL MARKETING COURSE</h1>
        </div>
      </div>
      <div className="container content">
      <div className='row py-5 px-5'>
      <div className='col-sm-6 mb-4'>
        <img src="courses.jpg" alt='courses'style={{width:'100%',backgroundSize:'cover'}}/>
      </div>
        <div className='col-sm-6 pt-3'>
        <h2>Digital Marketing</h2>

          <p>SRYN Learning offers India’s most recognized digital marketing course. 
            The content is continuously updated to ensure that students learn the latest digital marketing and soft skills. Students will learn about Google Ads, social media marketing, SEO, and much more. 
            After completing the diploma, students will be certified digital marketing professionals.</p>

            <Button className='enroll m-4 px-3' as={Link} to="/enrollform" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',border:'none',borderRadius:'20px' }}><b>ENROLL NOW</b></Button>
            <Button className='demo m-4 px-3'as={Link} to="/demo" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',border:'none',borderRadius:'20px'}}><b>BOOK DEMO</b></Button>

        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 lg-12'>
          <h2> Course Details</h2>
          <div className='details'>
          <h5>ELIGIBILITY</h5>
          <li>Must Be 18-Year-Old</li>
          <li>10th/12th Pass Or Graduate (Any Stream) For Certification Course.</li>
          <li>Basic Communication Skills (English And Hindi)</li>
          <li>Laptop/Computer & Good Internet Connectivity</li>

          <h5>COURSE FEE</h5>
          <li>Rs.4769 (Including 18% Gst) Registration Charges.</li>

          <Button className='enroll m-4 px-3' as={Link} to="/enrollform" style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',border:'none',borderRadius:'20px' }}><b>ENROLL NOW</b></Button>
          </div>
        </div>
        <div className='col-sm-6 lg-12'>
        <form>
          <div className='ContactForm'>
      <div className='card container mb-5'>
      <h2 className='mb-0 text-center pt-3'>Enquiry Form</h2>

        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='enquiry-form' onSubmit={handleSubmit(onSubmit)} noValidate className='mt-5'>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input type='text' className='form-control formInput' name='name' placeholder='Name'
                      {...register('name', {required: { value: true, message: 'Please enter your name' },
                        maxLength: { value: 30,message: 'Please use 30 characters or less'}})}/>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  </div>
                  <div className='row formRow'>
                  <div className='col'>
                    <input type='email'className='form-control formInput' name='email'placeholder='Email address'
                      {...register('email', { required: true,pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}/>
                    {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input type='text' className='form-control formInput'name='phone' placeholder='Phone'
                      {...register('phone', {required: { value: true, message: 'Please enter a phone' },
                        maxLength: {value: 10,message: 'Phone number is invalid'}})}/>
                      {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    {/* <input type='text' className='form-control formInput' name='message'  placeholder='Message'
                    {...register('message', {required: true})} />
                    {errors.message && <span className='errorMessage'>Please enter a message</span>} */}
                    <select id="course" name="course" class="form-select form-control formInput" aria-label="Floating label select example">
                    <option value="au">Choose course name</option>
                    <option value="au">Digital Marketing</option>
                    <option value="ca">Social Media Marketing</option>
                    <option value="usa">Google Marketing</option>
                    <option value="usa">Web Development</option>
                    <option value="usa">Graphics and Video Editing</option>

                      </select>
                  </div>
                </div>
                <Button type="submit" className='enquiryf m-3' style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',width:'200px'}}>Submit </Button> 

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}
