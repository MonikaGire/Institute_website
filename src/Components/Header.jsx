import React from 'react'

export default function Header() {
  return (
    <div>
        <div className=' container-fluid header'>
         
         <span className='header-icon'><FaWhatsapp size={20}className='icon'/>9632587413</span> |
           <span className='header-icon'><FaEnvelope size={20}className='icon'/>info@gmail.com</span>
         
         
           <span className='social lg-12'>
           <FaFacebook size={20} className='icon'/>
           <FaInstagram size={20} className='icon'/>
           <FaLinkedin size={20} className='icon'/>
           <FaWhatsapp size={20} className='icon' />
           </span>
         
                      
       </div>
    </div>
  )
}
