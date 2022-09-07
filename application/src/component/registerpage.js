import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Register=()=>{
        const navigate = useNavigate();
        const [inputvalue,setInputvalue]=useState(
                {
                        username:'',
                        email:'',
                        date:'',
                        password:'',

                }
        )
      const getdata = (e)=>{
        const{value,name}=e.target;

        setInputvalue(()=>{
                return{
                        ...inputvalue,
                        [name]:value
                }

        })
}
        const addData = (e)=>{
                e.preventDefault();
                const {username,email,date,password}=inputvalue;

                if(username === ''){
                        alert('name field is requrd')
                }
                else if(email === ""){
                        alert('email field is requrd')
                }
                else if(!email.includes('@')){
                        alert('plz enter valid email address')
                }
                else if(date === '') {
                        alert("date field is requred")
                }
                else if(password === ''){
                        alert('password field is requred')
                }
                else if(password.length< 5){
                        alert('password length greater five')
                }
                else{
                       if(username.length === 0 && password.length ===0 && email.length===0)
                {alert('invaild')}
                else{
                        navigate('/login')
                }
                       
                }
       
        
      }
        return( 
        <>
        <div className='body'>
        <form className='form'>
        <div className='title'>
          SIGN UP
        </div>
        <div className='reginput-container'>
          <label>Username</label>
          <input type='text' name='username' placeholder='username'  onChange={getdata}/>
        </div>
        <div className='reginput-container'>
          <label>Email</label>
          <input type='text' name='email' placeholder='Email'  onChange={getdata}/> 
        </div>
        
        <div className='reginput-container'>
          <label>DOB</label>
          <input type='date' name='date' placeholder='yyyy-mm-dd'  onChange={getdata}/>  
        </div>

        <div className='reginput-container'>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' onChange={getdata}/>
        </div>
       
        <div className='submit' >
                <button onClick={addData}>submit</button>
        </div><br />
        <div style={{textAlign:'center'}}>
         <p>Already you have account <a href='/login' >Click Here!</a></p>
        </div>  
      </form>
      <img src='login.jpg' alt='not found img' />
      </div>
      </>

     
        )
}
export default Register;