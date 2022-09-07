import React, { useState }  from 'react';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from '../store/actions/action';
import Button from 'react-bootstrap/Button';

function Login () {
 const[detail,setDetail]=useState(
  {
    username:'',
    password:'',
  }
 )

 const User = useSelector((state) => state.ProductReducer);
 console.log("--------------",User)
 const dispatch=useDispatch();


const handleChange =(e)=>
{
  const {name,value}=e.target;

  setDetail(()=>{
    return{
      ...detail,
      [name]:value,
    }
  })
  
    }
  
  


const Change = (e) => {
  e.preventDefault();
    console.log("detail", detail)
   dispatch(LOGIN(detail));
}
  


    return(
      <div className='body'>
        <form className='app'>
        <div className='title' >
          LOGIN
        </div>
        <div className='input-container'>
          <label>Username</label>
          <input type='text' name='username' placeholder='username'  onChange={handleChange} required/>  
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' onChange={handleChange} required/>
        </div>
        <div className='submit' >
          <Button href="/home" onClick={() => Change}>Submit</Button>
        </div><br/>
        <div style={{textAlign:'center'}}>
          You Didn't Register Please <a href='/register'>Click Here!</a>
        </div>
        <br/>
      </form>
      <img src='login.jpg' alt='not found img' />
      </div>
      
     )
    }


export default Login;