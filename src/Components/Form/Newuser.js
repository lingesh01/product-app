import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Newuser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setpwd] = useState('');
  const [cnfpwd, setcnfpwd] = useState('');


  const loginHandler = () => {
    const emailVAlue = email.target.value;
    if (name.target.value > 4 && emailVAlue.includes("@gmail.com") && pwd.target.value === cnfpwd.target.value) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="body-container">
      <form className="form-container">
        <h3>Create Account</h3>
        <label htmlFor="username">Name</label> <br />
        <input type="text" placeholder='Name' onChange={setName} /> <br />
        <label htmlFor="usermail">Email</label> <br />
        <input type="text" placeholder='Email' onChange={setEmail} /> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="text" placeholder='Passowrd' onChange={setpwd} /> <br />
        <label htmlFor="password">Conform Password</label> <br />
        <input type="text" placeholder='Conform Passowrd' onChange={setcnfpwd} />
        <input type="submit" value="SignUp" className='btn' onClick={loginHandler} />
        <Link to='/login'>Already have account</Link>
      </form>
    </div>
  )
}

export default Newuser