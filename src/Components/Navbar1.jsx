import React,{useState} from 'react'
import './Navbar.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Home from './home/Home';

 export const Navbar1 = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
        {/* <div className=' container-fluid header'>
         
          <span className='header-icon'><FaWhatsapp size={20}className='icon'/>9632587413</span> |
            <span className='header-icon'><FaEnvelope size={20}className='icon'/>info@gmail.com</span>
          
          
            <span className='social lg-12'>
            <FaFacebook size={20} className='icon'/>
            <FaInstagram size={20} className='icon'/>
            <FaLinkedin size={20} className='icon'/>
            <FaWhatsapp size={20} className='icon' />
            </span>
          
                       
        </div> */}
{/* Navbar */}
<Navbar collapseOnSelect expand="lg" className='navbar-header px-2'expanded={expanded} >
      
        <Navbar.Brand as={Link} to="/home" className='logo'>
          <Image src='loginrich_logo.jpg 'style={{height : '60px',width : '150px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          
           <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className='mt-3' onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className='mt-3'onClick={() => setExpanded(false)} >About</Nav.Link>
            <Nav.Link as={Link} to="/services" className='mt-3' onClick={() => setExpanded(false)}>Services</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown" className='mt-3'>
              <NavDropdown.Item as={Link} to="/digitalmarketing" onClick={() => setExpanded(false)}>Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/socialmediamarketing" onClick={() => setExpanded(false)}>Social Media Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/googlemarketing" onClick={() => setExpanded(false)}>Google Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/webdevelopment"  onClick={() => setExpanded(false)}>Web Development link</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/graphicvideoediting"  onClick={() => setExpanded(false)}>Graphics And Video Editing</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to="/career" className='mt-3'  onClick={() => setExpanded(false)}>Careers</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='mt-3'  onClick={() => setExpanded(false)}>Contact</Nav.Link>

            <Button className='login' as={Link} to="/login" onClick={() => setExpanded(false)} style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c',border:'none',borderRadius:'0'}}>Login</Button>
          <Button className='login' as={Link} to="/registration" onClick={() => setExpanded(false)} style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'0'}}>Register</Button> 
          </Nav>
          
        </Navbar.Collapse>
      
    </Navbar>
    
        </>
  )
}
export default Navbar1;