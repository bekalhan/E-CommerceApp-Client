import React from 'react';
import './Search.css';
import {UilSearch} from '@iconscout/react-unicons';

function Search() {
  return (
    <div className="Search">
        <div className="s-search">
            <h1 className="s-search-h1">Newsletter</h1>
            <h3 className="s-search-h3">Get timely updates from your favourite products</h3>
            <input className='s-search-input' placeholder='Your email' />
        </div>
    </div>
  )
}

export default Search