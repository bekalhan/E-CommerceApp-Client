import React from 'react';
import './Header.css';
import LogoSearch from '../LogoSearch/LogoSearch';

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
                <li>Register</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header