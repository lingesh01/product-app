import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigation = useNavigate();

    return (
        <nav>
            <div class="navbar-logo">
                <h1>Billing Zone</h1>
                <h3>Pro<span>plus</span></h3>
            </div>
            <div>
                <button className='navbar-btn' onClick={() => navigation("/login")} >Logout</button>
            </div>
        </nav>
    )
}

export default Navbar