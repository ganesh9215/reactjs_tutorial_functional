import react, { useState } from 'react'

const Signup=()=>{
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    return(
        <div className='register'>
            <div className='input-container'>
            <input placeholder='Enter Name' type='text' className='input' name='Name'
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='input-container'>
            <input placeholder='Enter Email' type='text' name='Email'className='input' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
             <div className='input-container'>
            <input placeholder='Enter Password' type='password' name='Password'className='input' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <div className='input-container'>
            <button onClick={()=>{console.log(name,email,password)}} className='button'>Register</button>
            </div>
        </div>
    )
}
export default Signup;