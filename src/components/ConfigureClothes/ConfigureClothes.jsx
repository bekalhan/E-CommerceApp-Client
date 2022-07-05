import React from 'react';
import './ConfigureClothes.css';

function ConfigureClothes() {
  return (
    <div className='ConfigureClothes'>
        <div className='green-line'>
             Super Deal! Free Shopping on Orders Over SSO
        </div>
        <div className="t-gender">
            women
        </div>
        <div className='product'>
            <div className='filter-product'>
                <h3>Filter Products : </h3>
                <select className="opt" id="" name="cars">
                </select>
                <select className="opt" id="" name="cars">
                </select>
            </div>
          <div className='sort-product'>
            <h3>Sort Products :</h3>
          <select className="opt" id="" name="cars">
            </select>   
          </div>
               
        </div>
        
    </div>
  )
}

export default ConfigureClothes