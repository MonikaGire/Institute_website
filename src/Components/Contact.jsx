import React from 'react'
import { useForm } from 'react-hook-form';
import './contact.css'
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';

import { FaEnvelope, FaGraduationCap, FaHome, FaPhoneAlt } from 'react-icons/fa';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };


  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <section className='contact'>
      <div className='heading img-responsive' style={{backgroundImage:'url("download.jpg")',width:'100%'}}>
    <div className='title pt-5'>
      <h1>CONTACT US</h1>
    </div>
      </div>
      <div className='container card content '>
      <div className='row' >
        

        <div className='col-sm-6 lg-12 py-5'>
          <form onSubmit={sendEmail}>
            <h1>Get In Touch Here</h1>
          <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate className='mt-5'>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input type='email'className='form-control formInput' name='email'placeholder='Email address'
                      {...register('email', { required: true,pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}/>
                    {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input type='text' className='form-control formInput'name='subject' placeholder='Subject'
                      {...register('subject', {required: { value: true, message: 'Please enter a subject' },
                        maxLength: {value: 75,message: 'Subject cannot exceed 75 characters'}})}/>
                      {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea rows={3}  className='form-control formInput' name='message'  placeholder='Message'
                    {...register('message', {required: true})} />
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <Button type="submit" className='mt-3' style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none'}}>Submit </Button> 

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
          </form>
          </div>

          <div className='col-sm-6 lg-12 py-5 ' 
          style={{textAlign:'center',backgroundColor:'#FAEBD7'}} 
          >
        
        <h3 >Let's get in touch</h3>
        <p style={{textAlign:'center'}}>We're open for any suggestion or just to have a chat</p>
        <div className='address'>
        <div><FaHome  size={25} style={{margin:'5px'}}/> Office Address:</div>
        <p>Sr.no.29,Office No.5,Sawant Park,Balaji Nagar,Pune Satara Road,Pune, Maharashtra, 411043, IN</p>
        </div>
        <div className='phone'>
          <div>
          <FaPhoneAlt size={25} style={{margin:'10px'}}/>Phone:
          <p>9658963259</p>
          </div>
        </div>
        <div className='email'>
          <div>
          <FaEnvelope size={25} style={{margin:'10px'}}/>Email Address:
          <p>info@gmail.com</p>
          </div>
          
        </div>
        </div>

        </div>
        {/* <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.779778520056!2d73.85034319206754!3d18.465990480467955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcf6aaaaaab%3A0xe1f90a45eb6919df!2sSawant%20Park!5e0!3m2!1sen!2sin!4v1698422386092!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
      </div>
    
      <div className='contact-bottom my-5'>
                <div className='bg p-5' style={{backgroundColor:'#eb144c'}}>
                <div className='content pt-5'>
                  <h1>ENROLL FAST</h1>
              
                  <div className='button'>
                  <Button type="submit"  style={{  backgroundColor:'cutom-color',backgroundColor:'white',borderRadius:'20px', border:'none',color:'black'}}><FaGraduationCap size={25}/> Learn More</Button> 
                  </div>
                  </div>
                  </div>
                </div>
    </section>
  )
}
export default Contact;
