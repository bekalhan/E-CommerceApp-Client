import React from 'react';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';


function LogoSearch() {
  return (
    <div className="LogoSearch">
        <div className='search'>
            <input className='i-search' type="text" placeholder='#explore' />
            <div className='s-icon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch