import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { Navbar1 } from './Components/Navbar1';
import { Home } from './Components/home/Home';
import { Footer } from './Components/Footer';
import Services from './Components/Services';
import Courses from './Components/Courses';
import Careers from './Components/Careers';
import About from './Components/About'
import Contact from './Components/Contact';
import Login from './Components/Forms/Login';
import Registration from './Components/Forms/Registration';
import ScrollTop from './Components/ScrollTop';
import { DigitalMarketing } from './Components/Courses/DigitalMarketing';
import { EnrollForm } from './Components/Forms/EnrollForm';
import { Sidebar } from './Components/Dashboard/Sidebar';
// import Blog from './Components/Blog';

function App() {
  // const [loading setLoading] = useState(true);
  return (
    <>
    {/* <button onClick={()=> setLoading(!loading)}> Toggle</button> */}
    <BrowserRouter>
    
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/services' element={<Services />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/digitalmarketing' element={<DigitalMarketing />} /> 
        {/* <Route path='/socialmediamarketing' element={<SocialMediaMarketing />} /> 
        <Route path='/googlemarketing' element={<GoogleMarketing />} /> 
        <Route path='/webdevelopment' element={<WebDevelopment />} /> 
        <Route path='/graphicvideoediting' element={<GraphicsVideo />} />  */}

        <Route path='/career' element={<Careers />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/footer' element={<Footer />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/enrollform' element={<EnrollForm/>}/>
        <Route path='/sidebar' element={<Sidebar />}></Route>

      </Routes>
      <ScrollTop />
      <Footer />

    </BrowserRouter>
    
   </>
  );
}

export default App;

