import React,{useState} from 'react'
import './EnrollForm.css'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';


export const EnrollForm = () => {
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
    <section className='enroll'>
        <div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',backgroundAttachment:'fixed',width:'100%'}}>
        <div className='title'>
          <h1>ENROLL NOW</h1>
        </div>
      </div>
      <div className='enrollform'>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate className='card m-5 p-5'>
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
                      {errors.subject && (<span className='errorMessage'>{errors.phone.message}</span>)}
                  </div>
                </div>
               
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                  <div className='col'>
                    <input type='text' className='form-control formInput'name='qualification' placeholder='Qualification'
                      {...register('qualification', {required: { value: true, message: 'Please enter a Qualification' },
                        maxLength: {value: 10,message: 'Qualification is invalid'}})}/>
                      {errors.subject && (<span className='errorMessage'>{errors.qualification.message}</span>)}
                  </div>
                </div>


                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    {/* <input type='text' className='form-control formInput' name='message'  placeholder='Message'
                    {...register('message', {required: true})} />
                    {errors.message && <span className='errorMessage'>Please enter a message</span>} */}
                    <select id="country" name="country" class="form-select form-control formInput" aria-label="Floating label select example">
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
    </section>
  )
}
