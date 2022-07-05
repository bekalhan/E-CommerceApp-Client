import React from 'react';
import { sliderItems } from "../../data";
import './ImageLeft.css';


function ImageLeft() {
  return (
    <div className="ImageLeft">
        {sliderItems.map((item)=>(
            <img className="image-red" src={item.img}></img>
        ))}
    </div>
  )
}

export default ImageLeft