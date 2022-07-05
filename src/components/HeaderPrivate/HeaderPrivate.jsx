import React from 'react';
import '../Header/Header.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import {logoutAction} from '../../redux/slices/Users/userSlices';
import { useDispatch } from 'react-redux';

function HeaderPrivate() {
  const dispatch = useDispatch();
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
            <div className="private-nav-opt">
              <h3>Basket</h3>
              <button onClick={()=>dispatch(logoutAction())}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderPrivate;