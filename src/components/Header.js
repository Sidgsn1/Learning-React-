import { useState } from "react";
import {Link} from 'react-router'

const logo = new URL("../../Assets/urbanBite.jpeg", import.meta.url).href;


const Header=()=>{

    const [isLoggedIn,setIsLoggedIn]=useState(false)
    console.log("header rendered")
    
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setIsLoggedIn(prev=>!prev)
                    }}>{isLoggedIn===false ? "login" : "logout"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;