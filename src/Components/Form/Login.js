import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './styles.css';

const Login = () => {
    const [email, setEmail] = useState(null)
    const [passowrd, setPassword] = useState(null)
    const navigation = useNavigate();

    const submitHandler = () => {
        let emailValue = email.target.value;
        let passwordValue = passowrd.target.value;
        if (emailValue.includes('@gmail.com') && passwordValue.length >= 8) {
            navigation("/dashboard")
        }
    }

    return (
        <div className="body-container">
            <form className="form-container">
                <h3>Login</h3>
                <label htmlFor="usermail">Email</label> <br />
                <input type="text" onChange={setEmail} placeholder='Email' /> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="text" onChange={setPassword} placeholder='Passowrd' />
                <input type="submit" value="Login" onClick={submitHandler} className='btn' />
                <Link to='/signup'>I have no id</Link>
            </form>
        </div>
    )
}

export default Login