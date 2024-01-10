import React,{useState} from 'react';
import './Registration.css';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Registration = () => {
  
    const { register,formState: { errors }} = useForm();

 
   const [fname, setFname] = useState('');
   const [mname, setMname] = useState('');
   const [lname, setLname] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [uname, setUname] = useState('');
   const [password, setPassword] = useState('');
   const [cpassword, setCpassword] = useState('');

   async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:2023/api/register_employee/save",
        {
        firstname: fname,
        middlename : mname ,  
        lastname: lname , 
        emailid: email , 
        phoneNo: phone , 
        username: uname,
        password:password , 
        confirmPassword:cpassword
        
        
        });
          alert("Employee Registation Successfully");
          
          setFname("");
          setMname("");
          setLname("");
          setEmail("");
          setPhone("");
          setUname("");
          setPassword("");
          setCpassword("");
          
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }



 return (
    <div className='registration'>
      <div className='underline'></div>
     
        <div className='card container my-5'>
         <form>
         <h3 className='heading'>Registration Form</h3>
             <div className='row '>
                <div className='col-sm-4 lg-12'>
                <label className="label">First Name</label>
                <input className="input form-control lg"  type="text" onChange={(event) =>{setFname(event.target.value);}} value={fname}
               //   {...register("fname", { required: true, maxLength: 10})}
                 />
                 {errors.fname && <span style={{color:'red'}}>Invalid First Name</span>} 
                </div>

                <div className='col-sm-4 lg-12'>
                <label className="label">Middle Name</label>
                <input  className="input form-control"  type="text"onChange={(event) =>{setMname(event.target.value);}} value={mname}
                {...register("mname", { required: true, maxLength: 10})}
                />
                {errors.mname && <span style={{color:'red'}}>Invalid Middle Name</span>} 
                </div>

                <div className='col-sm-4 lg-12'>
                <label className="label">Last Name</label>
                <input  className="input form-control"  type="text"onChange={(event) =>{setLname(event.target.value);}} value={lname}
                {...register("lname", { required: true, maxLength: 10})}
                />
                {errors.lname && <span style={{color:'red'}}>Invalid Last Name</span>} 
                </div>
             </div>
 

             <div className='row'>
                <div className="col-sm-6 lg-12">
                <label className="label">Email</label>
                <input  className="input form-control"  type="text" onChange={(event) =>{setEmail(event.target.value);}} value={email}
                {...register("email", { required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, }})}
                />
                {errors.email && <span style={{color:'red'}}> Invalid Email</span>} 
             </div>

             <div className="col-sm-6 lg-12">
                <label className="label">Phone</label>
                <input  className="input form-control"  type="text" onChange={(event) =>{setPhone(event.target.value);}} value={phone}
                {...register("phone", { required: true, valueAsNumber: true})}
                />
                {errors.phone && <span style={{color:'red'}}>Invalid Phone no</span>} 
             </div>
             </div>


             <div className='row'>
                <div className='col-sm-6 lg-12'>
                <label className="label">Username</label>
                <input  className="input form-control"  type="text"onChange={(event) =>{setUname(event.target.value);}}  value={uname}
                {...register("uname", { required: true, maxLength: 5})}
                />
                {errors.uname && <span style={{color:'red'}}>Invalid User Name</span>} 
                </div>
             </div>


             <div className='row'>
                <div className='col-sm-6 lg-12'>
                <label className="label">Password</label>
                <input  className="input form-control"  type="password"onChange={(event) =>{setPassword(event.target.value);}} value={password}
                {...register("password", { required: true, minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1})}
                />
                {errors.password && <span style={{color:'red'}}>Invalid Password</span>} 
                </div>
                <div className='col-sm-6 lg-12'>
                <label className="label">Confirm Password</label>
                <input  className="input form-control"  type="password"onChange={(event) =>{setCpassword(event.target.value);}}  value={cpassword}
                {...register("cpassword", { required: true, 
                  // const password = getValues("password")
                  // return match === password || "Passwords should match!"
              })}
                />
                {errors.cpassword && <span style={{color:'red'}}>Password not match</span>} 
                </div>
             </div>
             <Button type="submit" onClick={save} style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none'}}>Submit </Button> 
         </form>
         </div>
     </div>
    
 
  )
}

export default Registration;