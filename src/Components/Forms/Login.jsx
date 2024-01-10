import React,{useState} from 'react'
import'./Login.css';
import { useForm } from 'react-hook-form';
import{FaEye,FaEyeSlash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Login = () => {

const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState('FaEyeSlash');



const handleToggle = () => {
  if (type==='password'){
     setIcon('FaEyeSlash');
     setType('text')
  } else {
     setIcon('FaEyeSlash')
     setType('password')
  }
}
  // show password
  const { register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  const [checked, setChecked] = React.useState(false); 
  function handleChange(e) {
     setChecked(e.target.checked);
  }

  return (
  <div className='container login' style={{width:500}}>
    
      <form onSubmit={handleSubmit(onSubmit)} className='card m-5 p-5'>
      <h3>Login</h3>
      <div>
      <input type="text" placeholder="Email" className='form-control'
        {...register("email", { required: true, pattern: /^[A-Z._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
      {errors.email && <span>Invalid email</span>}
      </div>

      <div>
      {/* <input type="text" placeholder="password" className='form-control'
        {...register("password", { required: true,  minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1 })}/>
          {errors.password && <span>Invalid password</span>} */}
         <input type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <FaEye class="absolute mr-10" icon={icon} size={25}/>
              </span>
      </div>
            <div>
            <input value = "test" type = "checkbox" className='me-3' onChange = {handleChange} />Remember me!
            {checked ? (<div> </div>) : (<div>  </div>)}
            </div>
        <Button  className='login'  style={{backgroundColor:'cutom-color',backgroundColor:'#eb144c', border:'none',borderRadius:'0'}}>Login</Button> 
        <div className='forgot-password'>
            <Link to="/resetpassword" style={{textDecoration:'none', color:'black',textAlign:'center'}}>Forgot Password? Click Here</Link>
        </div>
      
    </form>
  </div>
  )
}

export default Login;

