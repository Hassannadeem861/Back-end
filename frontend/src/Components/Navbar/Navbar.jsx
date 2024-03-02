import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { useAuth } from '../../store/auth'


const Navbar = () => {
    const { isLoggedIn } = useAuth()
    return (
        <div className='container'>
            <div className='logo' style={{ width: "50px", height: "50px", backgroundColor: "red" }}>
                <img src='' alt=''></img>
            </div>
            <nav>
                <ul className='flex'>
                    <li>
                        <Link to="/" style={{ color: 'white', textDecorationLine: "none" }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: 'white', textDecorationLine: "none" }}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ color: 'white', textDecorationLine: "none" }}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/services" style={{ color: 'white', textDecorationLine: "none" }}>Services</Link>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <Link to="/logout" style={{ color: 'white', textDecorationLine: "none" }}>Logout</Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/signup" style={{ color: 'white', textDecorationLine: "none" }}>Signup</Link>
                            </li>
                            <li>
                                <Link to="/login" style={{ color: 'white', textDecorationLine: "none" }}>Login</Link>
                            </li>
                        </>
                    )}

                </ul>
            </nav>

            <div>
                <input type='search' required placeholder='Enter your search' style={{ width: '300px', height: "40px" }}></input>
            </div>

        </div>
    )
}

export default Navbar
