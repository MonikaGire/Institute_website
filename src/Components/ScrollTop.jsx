import React,{useState} from "react";
import './ScrollTop.css';
import {FaAngleDoubleUp, FaAngleUp, FaArrowCircleUp} from 'react-icons/fa';
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';


export const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 
    
    return ( 
     <div className="scrolltop me-auto ">
         
       <FaAngleUp onClick={scrollToTop}  className="icon" size={30} /> 
       
     </div>
    ); 
  } 
    
export default ScrollTop;

