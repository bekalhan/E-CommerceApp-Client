import React from 'react';
import './Card.css';
import {categories} from '../../data';

function Card() {
  return (
    <div className='Card'>
        {categories.map((category)=>(
            <div className='card-category'>
                <img className='i-card' src={category.img}></img>
                <div className="c-text">
                    <h2 className='i-h2'>{category.title}</h2>
                    <button className="b-category">SHOW NOW</button> 
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card