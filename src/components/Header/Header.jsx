import React from 'react';
import './Header.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='Header'>
        <div className="Line">
            Super Deal! Free Shopping on Orders Over SSO
        </div>
        <div className="H-opt">
            <div className='l-opt'>
                <h3>EN</h3>
                <LogoSearch />
            </div>
            <h1 style={{cursor: 'pointer'}}>ROOT.</h1>
            <ul>
                <Link to="/register" className='Link'>Register</Link>
                <Link to="/login" className='Link'>Login</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header